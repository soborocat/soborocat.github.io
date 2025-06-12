<script lang="ts">
	import { onMount } from 'svelte';
	import BrandGithub from '@tabler/icons-svelte/icons/brand-github';
	import Mail from '@tabler/icons-svelte/icons/mail';
	import BrandInstagram from '@tabler/icons-svelte/icons/brand-instagram';

	let sectionsVisible = [false, false, false];
	let sectionElements: HTMLElement[] = [];

	function observeSection(index: number, element: HTMLElement) {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						sectionsVisible[index] = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.3 }
		);
		observer.observe(element);
	}

	onMount(() => {
		sectionElements.forEach((element, index) => {
			if (element) {
				observeSection(index, element);
			}
		});
	});

	const projects = [
		{
			title: 'Serverside RAW Image Editor (untitled)',
			year: '2025',
			category: 'DESKTOP APPLICATION',
			role: 'PM / Fullstack Developer',
			description:
				'Serverside RAW image editor with advanced features for professional photographers',
			tech: ['PYTHON', 'PYQT', 'IMAGE PROCESSING', 'GPU ACCELERATION'],
			status: 'PENDING'
		},

		{
			title: 'IMAGE TAGGING TOOL FOR CHARACTER COSPLAY',
			year: '2025',
			category: 'MACHINE LEARNING',
			role: 'Fullstack Developer / Data Engineer',
			description:
				'Python based image tagging tool for character cosplay that was used FSL (Few Shot Learning) model training with automated processing',
			tech: ['PYTHON', 'PILLOW', 'SCIKIT-LEARN', 'OPTIMIZATION'],
			status: 'PRESENT'
		},
		{
			title: 'FURPIC',
			year: '2024',
			category: 'WEB APPLICATION',
			role: 'FE Developer / Design / Branding',
			description:
				'Svelte-based subculture-community site with smooth animations and optimized media handling that links authors with their works',
			tech: ['SVELTE', 'TYPESCRIPT', 'POSTGRESQL', 'TAILWINDCSS', 'FIGMA'],
			status: 'PRESENT'
		},
		{
			title: 'MACHOBOT (TEAM QBIT)',
			year: '2022',
			category: 'CHATBOT',
			role: 'PD / Fullstack Developer',
			description:
				'The virtual stock game chatbot with real-time updates and interactive gameplay features integrated with Discord platform',
			tech: ['TYPESCRIPT', 'DISCORDJS', 'CANVAS', 'CI/CD'],
			status: 'PRESENT'
		},
		{
			title: 'Yak Project',
			year: '2019',
			category: 'MACHINE LEARNING',
			role: 'Fullstack Developer',
			description: 'Medicine classification with crawling websites',
			tech: ['PHP', 'CRAWLING'],
			status: 'FINISHED'
		}
	];
</script>

<div class="relative min-h-screen bg-gray-100">
	<div class="absolute top-8 right-8 left-8">
		<div class="h-0.5 w-full bg-black"></div>
	</div>
	<div class="flex min-h-screen items-center justify-center">
		<div class="animate-fade-in text-center">
			<h1 class="mb-8 text-6xl font-black tracking-tight text-black md:text-8xl">SoBoRo</h1>
			<p class="mb-12 text-xl font-medium tracking-wide text-black">
				CREATING RESPONSIVE & ACCESSIBLE APPLICATIONS
			</p>

			<!-- 소셜 링크 -->
			<div class="flex justify-center gap-12">
				<a
					href="https://github.com/soborocat"
					target="_blank"
					rel="noopener noreferrer"
					class="text-black transition-opacity hover:opacity-60"
				>
					<BrandGithub size={24} />
				</a>
				<a
					href="mailto:root@ai.ai.kr"
					target="_blank"
					rel="noopener noreferrer"
					class="text-black transition-opacity hover:opacity-60"
				>
					<Mail size={24} />
				</a>
				<a
					href="https://instagram.com/tsunagite_"
					target="_blank"
					rel="noopener noreferrer"
					class="text-black transition-opacity hover:opacity-60"
				>
					<BrandInstagram size={24} />
				</a>
			</div>
		</div>
	</div>

	<!-- 하단 라인 -->
	<div class="absolute right-8 bottom-8 left-8">
		<div class="h-0.5 w-full bg-black"></div>
	</div>

	<!-- 스크롤 인디케이터 -->
	<div class="absolute bottom-16 left-1/2 -translate-x-1/2 transform">
		<div class="text-sm font-medium tracking-widest text-black">SCROLL</div>
	</div>
</div>

<!-- 프로젝트 섹션 -->
<div class="bg-gray-100">
	<section
		bind:this={sectionElements[0]}
		class="min-h-screen px-8 py-24 transition-all duration-700 ease-out"
		class:opacity-0={!sectionsVisible[0]}
		class:translate-y-12={!sectionsVisible[0]}
		class:opacity-100={sectionsVisible[0]}
		class:translate-y-0={sectionsVisible[0]}
	>
		<!-- 섹션 헤더 -->
		<div class="mb-24">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="text-4xl font-black tracking-tight text-black md:text-6xl">PROJECTS</h2>
				<div class="font-medium text-black">2018 — 2025</div>
			</div>
			<div class="h-0.5 w-full bg-black"></div>
		</div>

		<!-- 프로젝트 리스트 -->
		<div class="mx-auto max-w-6xl space-y-16">
			{#each projects as project, index}
				<div class="group">
					<div class="grid items-start gap-8 md:grid-cols-12">
						<!-- 프로젝트 번호 -->
						<div class="md:col-span-1">
							<div class="text-2xl font-black text-black">
								{String(index + 1).padStart(2, '0')}
							</div>
						</div>

						<!-- 프로젝트 정보 -->
						<div class="md:col-span-6">
							<div class="mb-2">
								<span class="text-sm font-medium tracking-wide text-black">{project.category}</span>
								<span class="ml-4 text-sm font-medium tracking-wide text-black">{project.year}</span
								>
								<span class="ml-4 text-sm font-medium tracking-wide text-black"
									>— {project.status}</span
								>
							</div>
							<h3
								class="mb-2 text-2xl font-black tracking-tight text-black transition-opacity group-hover:opacity-60 md:text-3xl"
							>
								{project.title}
							</h3>
							<!-- 직무 정보 추가 -->
							<div
								class="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
							>
								{project.role}
							</div>
							<p class="mb-6 max-w-lg leading-relaxed text-black">
								{project.description}
							</p>
							<div class="flex flex-wrap gap-4">
								{#each project.tech as tech}
									<span
										class="border-b border-black pb-1 text-sm font-medium tracking-wide text-black"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<!-- 프로젝트 이미지 영역 -->
						<div class="md:col-span-5">
							<div
								class="aspect-[4/3] border border-black bg-white transition-colors group-hover:bg-gray-50"
							>
								<div class="flex h-full w-full items-center justify-center">
									<div class="text-center">
										<div class="mx-auto mb-4 h-16 w-16 border-2 border-black"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{#if index < projects.length - 1}
						<div class="mt-16 h-0.5 w-full bg-black"></div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- 연락처 섹션 -->
	<section
		bind:this={sectionElements[1]}
		class="px-8 py-24 transition-all duration-700 ease-out"
		class:opacity-0={!sectionsVisible[1]}
		class:translate-y-12={!sectionsVisible[1]}
		class:opacity-100={sectionsVisible[1]}
		class:translate-y-0={sectionsVisible[1]}
	>
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-16 md:grid-cols-2">
				<!-- 연락처 정보 -->
				<div>
					<h2 class="mb-8 text-4xl font-black tracking-tight text-black md:text-6xl">CONTACT</h2>
					<div class="space-y-6">
						<div>
							<div class="mb-2 text-sm font-medium tracking-wide text-black">EMAIL</div>
							<a
								href="mailto:root@ai.ai.kr"
								class="text-xl font-medium text-black transition-opacity hover:opacity-60"
							>
								ROOT@AI.AI.KR
							</a>
						</div>
						<div>
							<div class="mb-2 text-sm font-medium tracking-wide text-black">GITHUB</div>
							<a
								href="https://github.com/soborocat"
								target="_blank"
								rel="noopener noreferrer"
								class="text-xl font-medium text-black transition-opacity hover:opacity-60"
							>
								SOBOROCAT
							</a>
						</div>
						<div>
							<div class="mb-2 text-sm font-medium tracking-wide text-black">INSTAGRAM</div>
							<a
								href="https://instagram.com/tsunagite_"
								target="_blank"
								rel="noopener noreferrer"
								class="text-xl font-medium text-black transition-opacity hover:opacity-60"
							>
								@TSUNAGITE_
							</a>
						</div>
					</div>
				</div>

				<!-- 기술 스택 -->
				<div>
					<h3 class="mb-8 text-2xl font-black tracking-tight text-black">TECHNOLOGIES</h3>
					<div class="grid grid-cols-2 gap-8">
						<div>
							<div class="mb-4 text-sm font-medium tracking-wide text-black">FRONTEND</div>
							<div class="space-y-2">
								<div class="text-black">SVELTE</div>
								<div class="text-black">TYPESCRIPT</div>
								<div class="text-black">TAILWIND CSS</div>
								<div class="text-black">HTML5/CSS3</div>
							</div>
						</div>
						<div>
							<div class="mb-4 text-sm font-medium tracking-wide text-black">BACKEND & TOOLS</div>
							<div class="space-y-2">
								<div class="text-black">POSTGRESQL</div>
								<div class="text-black">PYTHON</div>
								<div class="text-black">DISCORD.JS</div>
								<div class="text-black">MACHINE LEARNING</div>
								<div class="text-black">LINUX</div>
								<div class="text-black">DOCKER</div>
								<div class="text-black">FIGMA</div>
								<div class="text-black">NETWORK ENGINEERING</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 하단 라인 -->
		<div class="mt-24 h-0.5 w-full bg-black"></div>
		<div class="mt-8 text-center">
			<div class="text-sm font-medium text-black">Copyright 2025. SoBoRo. Design by SoBoRo</div>
		</div>
	</section>
</div>

<svelte:head>
	<title>Soboro - Web Developer</title>
	<meta
		name="description"
		content="Web Developer creating responsive and accessible applications"
	/>
</svelte:head>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1.2s ease-out;
	}
</style>
