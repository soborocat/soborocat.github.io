<script lang="ts">
	/// <reference types="@webgpu/types" />
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let device: GPUDevice;
	let context: GPUCanvasContext;
	let pipeline: GPURenderPipeline;
	let uniformBuffer: GPUBuffer;
	let bindGroup: GPUBindGroup;

	let mouseX = 0;
	let mouseY = 0;
	let targetX = 0;
	let targetY = 0;

	const vertexShaderCode = `
		struct VertexOutput {
			@builtin(position) position: vec4<f32>,
			@location(0) uv: vec2<f32>,
		}
		
		@vertex
		fn main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
			var pos = array<vec2<f32>, 6>(
				vec2<f32>(-1.0, -1.0),
				vec2<f32>( 1.0, -1.0),
				vec2<f32>(-1.0,  1.0),
				vec2<f32>( 1.0, -1.0),
				vec2<f32>( 1.0,  1.0),
				vec2<f32>(-1.0,  1.0)
			);
			
			var uv = array<vec2<f32>, 6>(
				vec2<f32>(0.0, 1.0),
				vec2<f32>(1.0, 1.0),
				vec2<f32>(0.0, 0.0),
				vec2<f32>(1.0, 1.0),
				vec2<f32>(1.0, 0.0),
				vec2<f32>(0.0, 0.0)
			);
			
			var output: VertexOutput;
			output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
			output.uv = uv[vertexIndex];
			return output;
		}
	`;

	const fragmentShaderCode = `
		struct Uniforms {
			mouse: vec2<f32>,
			time: f32,
			resolution: vec2<f32>,
		}
		
		@group(0) @binding(0) var<uniform> uniforms: Uniforms;
		
		fn liquidGlass(uv: vec2<f32>, mouse: vec2<f32>, time: f32) -> vec4<f32> {
			let center = mouse;
			let dist = distance(uv, center);
			
			// 리퀴드 글래스 굴절 효과
			let refraction = sin(dist * 15.0 - time * 3.0) * 0.02;
			let newUV = uv + refraction * normalize(uv - center);
			
			// 버블 효과
			let bubble = smoothstep(0.15, 0.05, dist);
			let bubbleRing = smoothstep(0.12, 0.08, dist) - smoothstep(0.08, 0.04, dist);
			
			// 글래스 색상
			let glassColor = vec3<f32>(0.8, 0.9, 1.0);
			let alpha = bubble * 0.3 + bubbleRing * 0.6;
			
			// 3D 굴절 시뮬레이션
			let normal = normalize(vec3<f32>(newUV - center, 0.1));
			let reflection = dot(normal, vec3<f32>(0.0, 0.0, 1.0));
			
			return vec4<f32>(glassColor * reflection, alpha);
		}
		
		@fragment
		fn main(@location(0) uv: vec2<f32>) -> @location(0) vec4<f32> {
			let normalizedUV = uv;
			let normalizedMouse = uniforms.mouse / uniforms.resolution;
			
			return liquidGlass(normalizedUV, normalizedMouse, uniforms.time);
		}
	`;

	async function initWebGPU() {
		if (!navigator.gpu) {
			throw new Error('WebGPU not supported');
		}

		const adapter = await navigator.gpu.requestAdapter();
		if (!adapter) {
			throw new Error('No adapter found');
		}

		device = await adapter.requestDevice();
		context = canvas.getContext('webgpu')!;

		const format = navigator.gpu.getPreferredCanvasFormat();
		context.configure({
			device,
			format,
			alphaMode: 'premultiplied'
		});

		// 셰이더 모듈 생성
		const vertexShader = device.createShaderModule({ code: vertexShaderCode });
		const fragmentShader = device.createShaderModule({ code: fragmentShaderCode });

		// 유니폼 버퍼 생성
		uniformBuffer = device.createBuffer({
			size: 32, // vec2 + f32 + vec2 + padding
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		});

		// 바인드 그룹 레이아웃
		const bindGroupLayout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					buffer: { type: 'uniform' }
				}
			]
		});

		// 바인드 그룹 생성
		bindGroup = device.createBindGroup({
			layout: bindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: uniformBuffer }
				}
			]
		});

		// 렌더 파이프라인 생성
		pipeline = device.createRenderPipeline({
			layout: device.createPipelineLayout({
				bindGroupLayouts: [bindGroupLayout]
			}),
			vertex: {
				module: vertexShader,
				entryPoint: 'main'
			},
			fragment: {
				module: fragmentShader,
				entryPoint: 'main',
				targets: [
					{
						format,
						blend: {
							color: {
								srcFactor: 'src-alpha',
								dstFactor: 'one-minus-src-alpha'
							},
							alpha: {
								srcFactor: 'one',
								dstFactor: 'one-minus-src-alpha'
							}
						}
					}
				]
			},
			primitive: {
				topology: 'triangle-list'
			}
		});
	}

	function updateUniforms(time: number) {
		// 부드러운 마우스 추적
		targetX += (mouseX - targetX) * 0.1;
		targetY += (mouseY - targetY) * 0.1;

		const uniformData = new Float32Array([
			targetX,
			targetY, // mouse
			time * 0.001, // time
			0, // padding
			canvas.width,
			canvas.height // resolution
		]);

		device.queue.writeBuffer(uniformBuffer, 0, uniformData);
	}

	function render(time: number) {
		updateUniforms(time);

		const commandEncoder = device.createCommandEncoder();
		const renderPass = commandEncoder.beginRenderPass({
			colorAttachments: [
				{
					view: context.getCurrentTexture().createView(),
					clearValue: { r: 0, g: 0, b: 0, a: 0 },
					loadOp: 'clear',
					storeOp: 'store'
				}
			]
		});

		renderPass.setPipeline(pipeline);
		renderPass.setBindGroup(0, bindGroup);
		renderPass.draw(6);
		renderPass.end();

		device.queue.submit([commandEncoder.finish()]);
		requestAnimationFrame(render);
	}

	function handleMouseMove(event: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		mouseX = event.clientX - rect.left;
		mouseY = rect.height - (event.clientY - rect.top); // Y축 뒤집기
	}

	onMount(async () => {
		try {
			await initWebGPU();
			requestAnimationFrame(render);
		} catch (error) {
			console.error('WebGPU initialization failed:', error);
		}
	});
</script>

// LiquidGlass.svelte
<canvas
	bind:this={canvas}
	width="800"
	height="600"
	class="pointer-events-none absolute inset-0"
	on:mousemove={handleMouseMove}
>
</canvas>
