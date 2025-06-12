<script lang="ts">
	import { onMount } from 'svelte';
	import BrandGithub from '@tabler/icons-svelte/icons/brand-github';
	import Mail from '@tabler/icons-svelte/icons/mail';
	import BrandInstagram from '@tabler/icons-svelte/icons/brand-instagram';

	let sectionsVisible = [false, false, false];
	let sectionElements: HTMLElement[] = [];
	let observers: IntersectionObserver[] = [];

	function createObserver() {
		// 기존 observers 정리
		observers.forEach((observer) => observer.disconnect());
		observers = [];

		// 모바일과 데스크톱에 따른 다른 설정
		const isMobile = window.innerWidth < 768;

		const observerOptions = {
			root: null,
			rootMargin: isMobile ? '0px 0px -20% 0px' : '0px 0px -30% 0px',
			threshold: isMobile ? [0, 0.1, 0.25] : [0, 0.2, 0.4]
		};

		sectionElements.forEach((element, index) => {
			if (!element) return;

			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					const isVisible =
						entry.isIntersecting && entry.intersectionRatio > (isMobile ? 0.1 : 0.2);

					if (isVisible && !sectionsVisible[index]) {
						sectionsVisible[index] = true;
					}
				});
			}, observerOptions);

			observer.observe(element);
			observers.push(observer);
		});
	}

	function handleResize() {
		// 뷰포트 높이 재설정
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// Observer 재생성 (모바일/데스크톱 전환 시)
		createObserver();
	}

	onMount(() => {
		// 초기 뷰포트 높이 설정
		handleResize();

		// 약간의 지연 후 observer 생성 (DOM 완전 로드 대기)
		const timeoutId = setTimeout(() => {
			createObserver();
		}, 150);

		// 리사이즈 이벤트 등록 (디바운스 적용)
		let resizeTimeout: number;
		const debouncedResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(handleResize, 250);
		};

		window.addEventListener('resize', debouncedResize);
		window.addEventListener('orientationchange', () => {
			setTimeout(handleResize, 300);
		});

		return () => {
			clearTimeout(timeoutId);
			clearTimeout(resizeTimeout);
			window.removeEventListener('resize', debouncedResize);
			window.removeEventListener('orientationchange', handleResize);
			observers.forEach((observer) => observer.disconnect());
		};
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

<svelte:head>
	<title>Soboro - Web Developer</title>
	<meta
		name="description"
		content="Web Developer creating responsive and accessible applications"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
</svelte:head>

<div class="min-h-screen-mobile relative bg-gray-100">
	<div class="absolute top-4 right-4 left-4 md:top-8 md:right-8 md:left-8">
		<div class="h-0.5 w-full bg-black"></div>
	</div>
	<div class="min-h-screen-mobile flex items-center justify-center px-4">
		<div class="animate-fade-in text-center">
			<h1
				class="mb-6 text-4xl font-black tracking-tight text-black md:mb-8 md:text-6xl lg:text-8xl"
			>
				SoBoRo
			</h1>
			<p class="mb-8 px-4 text-lg font-medium tracking-wide text-black md:mb-12 md:text-xl">
				CREATING RESPONSIVE & ACCESSIBLE APPLICATIONS
			</p>

			<!-- 소셜 링크 -->
			<div class="flex justify-center gap-8 md:gap-12">
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
	<div class="absolute right-4 bottom-4 left-4 md:right-8 md:bottom-8 md:left-8">
		<div class="h-0.5 w-full bg-black"></div>
	</div>

	<!-- 스크롤 인디케이터 -->
	<div class="absolute bottom-12 left-1/2 -translate-x-1/2 transform md:bottom-16">
		<div class="text-xs font-medium tracking-widest text-black md:text-sm">SCROLL</div>
	</div>
</div>

<!-- 프로젝트 섹션 -->
<div class="bg-gray-100">
	<section
		bind:this={sectionElements[0]}
		class="min-h-screen-mobile px-4 py-16 transition-all duration-1000 ease-out md:px-8 md:py-24"
		class:opacity-0={!sectionsVisible[0]}
		class:translate-y-8={!sectionsVisible[0]}
		class:opacity-100={sectionsVisible[0]}
		class:translate-y-0={sectionsVisible[0]}
	>
		<!-- 섹션 헤더 -->
		<div class="mb-16 md:mb-24">
			<div class="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
				<h2 class="text-3xl font-black tracking-tight text-black md:text-4xl lg:text-6xl">
					PROJECTS
				</h2>
				<div class="text-sm font-medium text-black md:text-base">2018 — 2025</div>
			</div>
			<div class="h-0.5 w-full bg-black"></div>
		</div>

		<!-- 프로젝트 리스트 -->
		<div class="mx-auto max-w-6xl space-y-12 md:space-y-16">
			{#each projects as project, index}
				<div class="group">
					<div class="grid items-start gap-6 md:grid-cols-12 md:gap-8">
						<!-- 프로젝트 번호 -->
						<div class="md:col-span-1">
							<div class="text-xl font-black text-black md:text-2xl">
								{String(index + 1).padStart(2, '0')}
							</div>
						</div>

						<!-- 프로젝트 정보 -->
						<div class="md:col-span-6">
							<div class="mb-2 flex flex-wrap gap-2 md:gap-4">
								<span class="text-xs font-medium tracking-wide text-black md:text-sm"
									>{project.category}</span
								>
								<span class="text-xs font-medium tracking-wide text-black md:text-sm"
									>{project.year}</span
								>
								<span class="text-xs font-medium tracking-wide text-black md:text-sm"
									>— {project.status}</span
								>
							</div>
							<h3
								class="mb-2 text-xl font-black tracking-tight text-black transition-opacity group-hover:opacity-60 md:text-2xl lg:text-3xl"
							>
								{project.title}
							</h3>
							<!-- 직무 정보 -->
							<div
								class="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 md:text-sm"
							>
								{project.role}
							</div>
							<p class="mb-6 max-w-lg text-sm leading-relaxed text-black md:text-base">
								{project.description}
							</p>
							<div class="flex flex-wrap gap-3 md:gap-4">
								{#each project.tech as tech}
									<span
										class="border-b border-black pb-1 text-xs font-medium tracking-wide text-black md:text-sm"
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
										<div class="mx-auto mb-4 h-12 w-12 border-2 border-black md:h-16 md:w-16"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{#if index < projects.length - 1}
						<div class="mt-12 h-0.5 w-full bg-black md:mt-16"></div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<!-- 연락처 섹션 -->
	<section
		bind:this={sectionElements[1]}
		class="px-4 py-16 transition-all duration-1000 ease-out md:px-8 md:py-24"
		class:opacity-0={!sectionsVisible[1]}
		class:translate-y-8={!sectionsVisible[1]}
		class:opacity-100={sectionsVisible[1]}
		class:translate-y-0={sectionsVisible[1]}
	>
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 md:grid-cols-2 md:gap-16">
				<!-- 연락처 정보 -->
				<div>
					<h2
						class="mb-6 text-3xl font-black tracking-tight text-black md:mb-8 md:text-4xl lg:text-6xl"
					>
						CONTACT
					</h2>
					<div class="space-y-4 md:space-y-6">
						<div>
							<div class="mb-2 text-xs font-medium tracking-wide text-black md:text-sm">EMAIL</div>
							<a
								href="mailto:root@ai.ai.kr"
								class="text-lg font-medium break-all text-black transition-opacity hover:opacity-60 md:text-xl"
							>
								ROOT@AI.AI.KR
							</a>
						</div>
						<div>
							<div class="mb-2 text-xs font-medium tracking-wide text-black md:text-sm">GITHUB</div>
							<a
								href="https://github.com/soborocat"
								target="_blank"
								rel="noopener noreferrer"
								class="text-lg font-medium text-black transition-opacity hover:opacity-60 md:text-xl"
							>
								SOBOROCAT
							</a>
						</div>
						<div>
							<div class="mb-2 text-xs font-medium tracking-wide text-black md:text-sm">
								INSTAGRAM
							</div>
							<a
								href="https://instagram.com/tsunagite_"
								target="_blank"
								rel="noopener noreferrer"
								class="text-lg font-medium text-black transition-opacity hover:opacity-60 md:text-xl"
							>
								@TSUNAGITE_
							</a>
						</div>
					</div>
				</div>

				<!-- 기술 스택 -->
				<div>
					<h3 class="mb-6 text-xl font-black tracking-tight text-black md:mb-8 md:text-2xl">
						TECHNOLOGIES
					</h3>
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
						<div>
							<div class="mb-3 text-xs font-medium tracking-wide text-black md:mb-4 md:text-sm">
								FRONTEND
							</div>
							<div class="space-y-1 md:space-y-2">
								<div class="text-sm text-black md:text-base">SVELTE</div>
								<div class="text-sm text-black md:text-base">TYPESCRIPT</div>
								<div class="text-sm text-black md:text-base">TAILWIND CSS</div>
								<div class="text-sm text-black md:text-base">HTML5/CSS3</div>
							</div>
						</div>
						<div>
							<div class="mb-3 text-xs font-medium tracking-wide text-black md:mb-4 md:text-sm">
								BACKEND & TOOLS
							</div>
							<div class="space-y-1 md:space-y-2">
								<div class="text-sm text-black md:text-base">POSTGRESQL</div>
								<div class="text-sm text-black md:text-base">PYTHON</div>
								<div class="text-sm text-black md:text-base">DISCORD.JS</div>
								<div class="text-sm text-black md:text-base">MACHINE LEARNING</div>
								<div class="text-sm text-black md:text-base">LINUX</div>
								<div class="text-sm text-black md:text-base">DOCKER</div>
								<div class="text-sm text-black md:text-base">FIGMA</div>
								<div class="text-sm text-black md:text-base">NETWORK ENGINEERING</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 하단 라인 -->
		<div class="mt-16 h-0.5 w-full bg-black md:mt-24"></div>
		<div class="mt-6 text-center md:mt-8">
			<div class="text-xs font-medium text-black md:text-sm">
				Copyright 2025. SoBoRo. Design by SoBoRo
			</div>
		</div>
	</section>
</div>

<style>
	:global(html, body) {
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(*) {
		box-sizing: border-box;
	}

	/* 모바일 뷰포트 높이 설정 */
	.min-h-screen-mobile {
		min-height: 100vh;
		min-height: calc(var(--vh, 1vh) * 100);
	}

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

	/* 모바일 최적화 */
	@media (max-width: 768px) {
		.min-h-screen-mobile {
			min-height: calc(var(--vh, 1vh) * 100);
		}

		/* 모바일에서 애니메이션 거리 조정 */
		.translate-y-8 {
			transform: translateY(2rem);
		}
	}

	/* 터치 디바이스 최적화 */
	@media (hover: none) and (pointer: coarse) {
		.group:hover .group-hover\:opacity-60 {
			opacity: 1;
		}

		.group:hover .group-hover\:bg-gray-50 {
			background-color: white;
		}
	}
</style>
