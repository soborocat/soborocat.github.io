<script lang="ts">
	import { onMount } from 'svelte';
	import BrandGithub from '@tabler/icons-svelte/icons/brand-github';
	import Mail from '@tabler/icons-svelte/icons/mail';
	import BrandInstagram from '@tabler/icons-svelte/icons/brand-instagram';

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

	let titleElement: HTMLElement;
	let isVisible = false;
	let mouseX = 0;
	let mouseY = 0;

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	onMount(() => {
		// 초기 뷰포트 높이 설정
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// 리사이즈 이벤트 등록
		const handleResize = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		// 제목 애니메이션 트리거
		setTimeout(() => {
			isVisible = true;
		}, 800);

		window.addEventListener('resize', handleResize);
		window.addEventListener('orientationchange', () => {
			setTimeout(handleResize, 300);
		});
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('orientationchange', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<svelte:head>
	<title>Soboro - Web Developer</title>
	<meta
		name="description"
		content="Web Developer creating responsive and accessible applications"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
</svelte:head>

<div
	class="min-h-screen-mobile relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200"
>
	<!-- 떠다니는 고양이 발자국들 -->
	<div class="floating-paws">
		<div class="paw paw-1">🐾</div>
		<div class="paw paw-2">🐾</div>
		<div class="paw paw-3">🐾</div>
		<div class="paw paw-4">🐾</div>
		<div class="paw paw-5">🐾</div>
	</div>

	<div class="absolute top-4 right-4 left-4 md:top-8 md:right-8 md:left-8">
		<div class="h-0.5 w-full bg-black"></div>
	</div>

	<div class="min-h-screen-mobile flex items-center justify-center px-4">
		<div class="animate-fade-in relative text-center">
			<!-- SoBoRo 제목 with 고양이 같은 애니메이션 -->
			<h1
				bind:this={titleElement}
				class="cat-title mb-6 text-4xl font-black tracking-tight text-black md:mb-8 md:text-6xl lg:text-8xl"
				class:title-bounce={isVisible}
				style="--mouse-x: {mouseX}px; --mouse-y: {mouseY}px;"
			>
				<span class="letter letter-s">S</span><span class="letter letter-o">o</span><span
					class="letter letter-b">B</span
				><span class="letter letter-o2">o</span><span class="letter letter-r">R</span><span
					class="letter letter-o3">o</span
				>
			</h1>

			<p class="mb-8 px-4 text-lg font-medium tracking-wide text-black md:mb-12 md:text-xl">
				CREATING RESPONSIVE & ACCESSIBLE APPLICATIONS
			</p>

			<!-- 소셜 링크 with 고양이 호버 효과 -->
			<div class="flex justify-center gap-8 md:gap-12">
				<a
					href="https://github.com/soborocat"
					target="_blank"
					rel="noopener noreferrer"
					class="social-link text-black transition-all duration-300 hover:scale-110 hover:rotate-12"
				>
					<BrandGithub size={24} />
				</a>
				<a
					href="mailto:root@ai.ai.kr"
					target="_blank"
					rel="noopener noreferrer"
					class="social-link text-black transition-all duration-300 hover:scale-110 hover:rotate-12"
				>
					<Mail size={24} />
				</a>
				<a
					href="https://instagram.com/tsunagite_"
					target="_blank"
					rel="noopener noreferrer"
					class="social-link text-black transition-all duration-300 hover:scale-110 hover:rotate-12"
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

	<!-- 스크롤 인디케이터 with 고양이 꼬리 -->
	<div class="absolute bottom-12 left-1/2 -translate-x-1/2 transform md:bottom-16">
		<div class="cat-tail-indicator">
			<div class="cat-tail"></div>
			<div class="text-xs font-medium tracking-widest text-black md:text-sm">SCROLL</div>
		</div>
	</div>
</div>

<!-- 프로젝트 섹션 -->
<div class="bg-gray-100">
	<section class="min-h-screen-mobile px-4 py-16 md:px-8 md:py-24">
		<!-- 섹션 헤더 -->
		<div class="mb-16 md:mb-24">
			<div class="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
				<h2
					class="project-title text-3xl font-black tracking-tight text-black md:text-4xl lg:text-6xl"
				>
					PROJECTS
				</h2>
				<div class="text-sm font-medium text-black md:text-base">2018 — 2025</div>
			</div>
			<div class="h-0.5 w-full bg-black"></div>
		</div>

		<!-- 프로젝트 리스트 -->
		<div class="mx-auto max-w-6xl space-y-12 md:space-y-16">
			{#each projects as project, index}
				<div class="group project-item" style="--delay: {index * 0.1}s">
					<div class="grid items-start gap-6 md:grid-cols-12 md:gap-8">
						<!-- 프로젝트 번호 with 고양이 발자국 -->
						<div class="md:col-span-1">
							<div class="project-number text-xl font-black text-black md:text-2xl">
								{String(index + 1).padStart(2, '0')}
								<span class="paw-print">🐾</span>
							</div>
						</div>

						<!-- 프로젝트 정보 -->
						<div class="md:col-span-6">
							<div class="mb-2 flex flex-wrap gap-2 md:gap-4">
								<span class="project-tag text-xs font-medium tracking-wide text-black md:text-sm"
									>{project.category}</span
								>
								<span class="project-tag text-xs font-medium tracking-wide text-black md:text-sm"
									>{project.year}</span
								>
								<span class="project-tag text-xs font-medium tracking-wide text-black md:text-sm"
									>— {project.status}</span
								>
							</div>
							<h3
								class="mb-2 text-xl font-black tracking-tight text-black transition-all duration-300 group-hover:scale-105 group-hover:opacity-60 md:text-2xl lg:text-3xl"
							>
								{project.title}
							</h3>
							<!-- 직무 정보 -->
							<div
								class="role-badge mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 md:text-sm"
							>
								{project.role}
							</div>
							<p class="mb-6 max-w-lg text-sm leading-relaxed text-black md:text-base">
								{project.description}
							</p>
							<div class="flex flex-wrap gap-3 md:gap-4">
								{#each project.tech as tech}
									<span
										class="tech-tag border-b border-black pb-1 text-xs font-medium tracking-wide text-black md:text-sm"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<!-- 프로젝트 이미지 영역 with 고양이 상자 -->
						<div class="md:col-span-5">
							<div
								class="project-box aspect-[4/3] border border-black bg-white transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-lg"
							>
								<div class="flex h-full w-full items-center justify-center">
									<div class="cat-in-box text-center">
										<div
											class="cat-placeholder mx-auto mb-4 h-12 w-12 border-2 border-black md:h-16 md:w-16"
										>
											<div class="cat-face">
												<div class="cat-whiskers">
													<div class="whisker whisker-1"></div>
													<div class="whisker whisker-2"></div>
													<div class="whisker whisker-3"></div>
													<div class="whisker whisker-4"></div>
												</div>
											</div>
										</div>
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
	<section class="px-4 py-16 md:px-8 md:py-24">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 md:grid-cols-2 md:gap-16">
				<!-- 연락처 정보 -->
				<div>
					<h2
						class="contact-title mb-6 text-3xl font-black tracking-tight text-black md:mb-8 md:text-4xl lg:text-6xl"
					>
						CONTACT
					</h2>
					<div class="space-y-4 md:space-y-6">
						<div class="contact-item">
							<div class="mb-2 text-xs font-medium tracking-wide text-black md:text-sm">EMAIL</div>
							<a
								href="mailto:root@ai.ai.kr"
								class="text-lg font-medium break-all text-black transition-all duration-300 hover:scale-105 hover:opacity-60 md:text-xl"
							>
								ROOT@AI.AI.KR
							</a>
						</div>
						<div class="contact-item">
							<div class="mb-2 text-xs font-medium tracking-wide text-black md:text-sm">GITHUB</div>
							<a
								href="https://github.com/soborocat"
								target="_blank"
								rel="noopener noreferrer"
								class="text-lg font-medium text-black transition-all duration-300 hover:scale-105 hover:opacity-60 md:text-xl"
							>
								SOBOROCAT
							</a>
						</div>
						<div class="contact-item">
							<div class="mb-2 text-xs font-medium tracking-wide text-black md:text-sm">
								INSTAGRAM
							</div>
							<a
								href="https://instagram.com/tsunagite_"
								target="_blank"
								rel="noopener noreferrer"
								class="text-lg font-medium text-black transition-all duration-300 hover:scale-105 hover:opacity-60 md:text-xl"
							>
								@TSUNAGITE_
							</a>
						</div>
					</div>
				</div>

				<!-- 기술 스택 -->
				<div>
					<h3
						class="tech-title mb-6 text-xl font-black tracking-tight text-black md:mb-8 md:text-2xl"
					>
						TECHNOLOGIES
					</h3>
					<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
						<div class="tech-section">
							<div class="mb-3 text-xs font-medium tracking-wide text-black md:mb-4 md:text-sm">
								FRONTEND
							</div>
							<div class="space-y-1 md:space-y-2">
								<div class="tech-item text-sm text-black md:text-base">SVELTE</div>
								<div class="tech-item text-sm text-black md:text-base">TYPESCRIPT</div>
								<div class="tech-item text-sm text-black md:text-base">TAILWIND CSS</div>
								<div class="tech-item text-sm text-black md:text-base">HTML5/CSS3</div>
							</div>
						</div>
						<div class="tech-section">
							<div class="mb-3 text-xs font-medium tracking-wide text-black md:mb-4 md:text-sm">
								BACKEND & TOOLS
							</div>
							<div class="space-y-1 md:space-y-2">
								<div class="tech-item text-sm text-black md:text-base">POSTGRESQL</div>
								<div class="tech-item text-sm text-black md:text-base">PYTHON</div>
								<div class="tech-item text-sm text-black md:text-base">DISCORD.JS</div>
								<div class="tech-item text-sm text-black md:text-base">MACHINE LEARNING</div>
								<div class="tech-item text-sm text-black md:text-base">LINUX</div>
								<div class="tech-item text-sm text-black md:text-base">DOCKER</div>
								<div class="tech-item text-sm text-black md:text-base">FIGMA</div>
								<div class="tech-item text-sm text-black md:text-base">NETWORK ENGINEERING</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 하단 라인 -->
		<div class="mt-16 h-0.5 w-full bg-black md:mt-24"></div>
		<div class="mt-6 text-center md:mt-8">
			<div class="footer-text text-xs font-medium text-black md:text-sm">
				Copyright 2025. SoBoRo. Design by SoBoRo
				<span class="cat-emoji">🐱</span>
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

	/* 기본 애니메이션 */
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

	/* 떠다니는 고양이 발자국 */
	.floating-paws {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.paw {
		position: absolute;
		font-size: 20px;
		opacity: 0.3;
		animation: float 8s ease-in-out infinite;
	}

	.paw-1 {
		top: 20%;
		left: 10%;
		animation-delay: 0s;
	}
	.paw-2 {
		top: 40%;
		right: 15%;
		animation-delay: 2s;
	}
	.paw-3 {
		top: 60%;
		left: 20%;
		animation-delay: 4s;
	}
	.paw-4 {
		top: 80%;
		right: 25%;
		animation-delay: 6s;
	}
	.paw-5 {
		top: 30%;
		left: 70%;
		animation-delay: 1s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		25% {
			transform: translateY(-10px) rotate(5deg);
		}
		50% {
			transform: translateY(-20px) rotate(-5deg);
		}
		75% {
			transform: translateY(-10px) rotate(3deg);
		}
	}

	@keyframes wiggle {
		0%,
		100% {
			transform: translateX(-50%) rotate(0deg);
		}
		25% {
			transform: translateX(-50%) rotate(-2deg);
		}
		75% {
			transform: translateX(-50%) rotate(2deg);
		}
	}

	/* SoBoRo 제목 애니메이션 */
	.cat-title {
		position: relative;
		z-index: 5;
	}

	.letter {
		display: inline-block;
		transition: all 0.3s ease;
	}

	.title-bounce .letter {
		animation: letterBounce 2s ease-in-out infinite;
	}

	.title-bounce .letter-s {
		animation-delay: 0s;
	}
	.title-bounce .letter-o {
		animation-delay: 0.1s;
	}
	.title-bounce .letter-b {
		animation-delay: 0.2s;
	}
	.title-bounce .letter-o2 {
		animation-delay: 0.3s;
	}
	.title-bounce .letter-r {
		animation-delay: 0.4s;
	}
	.title-bounce .letter-o3 {
		animation-delay: 0.5s;
	}

	@keyframes letterBounce {
		0%,
		100% {
			transform: translateY(0px) scale(1);
		}
		50% {
			transform: translateY(-10px) scale(1.05);
		}
	}

	/* 고양이 눈 */

	@keyframes blink {
		0%,
		90%,
		100% {
			transform: translate(-50%, -50%) scaleY(1);
		}
		95% {
			transform: translate(-50%, -50%) scaleY(0.1);
		}
	}

	/* 소셜 링크 호버 효과 */
	.social-link:hover {
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
	}

	/* 고양이 꼬리 스크롤 인디케이터 */
	.cat-tail-indicator {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.cat-tail {
		width: 3px;
		height: 30px;
		background: #333;
		border-radius: 3px;
		animation: tailWag 2s ease-in-out infinite;
		transform-origin: top center;
	}

	@keyframes tailWag {
		0%,
		100% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(10deg);
		}
		75% {
			transform: rotate(-10deg);
		}
	}

	/* 프로젝트 섹션 애니메이션 */
	.project-item {
		opacity: 0;
		transform: translateY(30px);
		animation: slideInUp 0.8s ease-out forwards;
		animation-delay: var(--delay);
	}

	@keyframes slideInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.project-number {
		position: relative;
	}

	.paw-print {
		position: absolute;
		top: -5px;
		right: -15px;
		font-size: 12px;
		opacity: 0;
		transition: all 0.3s ease;
	}

	.project-item:hover .paw-print {
		opacity: 1;
		transform: rotate(15deg);
	}

	/* 프로젝트 태그 애니메이션 */
	.project-tag {
		transition: all 0.3s ease;
	}

	.project-tag:hover {
		background: rgba(0, 0, 0, 0.1);
		padding: 2px 6px;
		border-radius: 4px;
	}

	.role-badge {
		transition: all 0.3s ease;
	}

	.role-badge:hover {
		background: #333;
		color: white;
		transform: scale(1.05);
	}

	.tech-tag {
		transition: all 0.3s ease;
		position: relative;
	}

	.tech-tag:hover {
		border-color: #666;
		transform: translateY(-2px);
	}

	/* 고양이 상자 효과 */
	.project-box {
		position: relative;
		overflow: hidden;
	}

	.cat-in-box {
		transition: all 0.3s ease;
	}

	.project-item:hover .cat-in-box {
		transform: scale(1.1);
	}

	.cat-placeholder {
		position: relative;
		transition: all 0.3s ease;
	}

	.cat-face {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.cat-whiskers {
		position: relative;
		width: 40px;
		height: 20px;
	}

	.whisker {
		position: absolute;
		width: 15px;
		height: 1px;
		background: #333;
		border-radius: 1px;
	}

	.whisker-1 {
		top: 8px;
		left: -5px;
		transform: rotate(-20deg);
	}
	.whisker-2 {
		top: 12px;
		left: -5px;
		transform: rotate(20deg);
	}
	.whisker-3 {
		top: 8px;
		right: -5px;
		transform: rotate(20deg);
	}
	.whisker-4 {
		top: 12px;
		right: -5px;
		transform: rotate(-20deg);
	}

	/* 연락처 섹션 애니메이션 */
	.contact-item {
		transition: all 0.3s ease;
	}

	.contact-item:hover {
		transform: translateX(10px);
	}

	.tech-section {
		transition: all 0.3s ease;
	}

	.tech-section:hover {
		transform: translateY(-5px);
	}

	.tech-item {
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.tech-item:hover {
		color: #666;
		transform: translateX(5px);
	}

	/* 제목들 애니메이션 */
	.project-title,
	.contact-title,
	.tech-title {
		transition: all 0.3s ease;
	}

	.project-title:hover,
	.contact-title:hover,
	.tech-title:hover {
		transform: scale(1.02);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	/* 푸터 고양이 이모지 */
	.footer-text {
		position: relative;
	}

	.cat-emoji {
		display: inline-block;
		margin-left: 8px;
		animation: catWave 2s ease-in-out infinite;
	}

	@keyframes catWave {
		0%,
		100% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(10deg);
		}
		75% {
			transform: rotate(-10deg);
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

		/* 터치 디바이스에서는 호버 애니메이션 비활성화 */
		.title-bounce .letter {
			animation: letterBounce 3s ease-in-out infinite;
		}
	}

	/* 반응형 조정 */
	@media (max-width: 768px) {
		.floating-paws .paw {
			font-size: 16px;
		}
	}
</style>
