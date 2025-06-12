/// <reference types="@webgpu/types" />

import { AvailableLanguageTag } from '../lib/paraglide/runtime';
import { ParaglideLocals } from '@inlang/paraglide-sveltekit';

declare global {
	namespace App {
		interface Locals extends ParaglideLocals<AvailableLanguageTag> {}
	}

	interface Navigator {
		gpu?: GPU;
	}

	interface Window {
		gpu?: GPU;
	}
}

export {};
