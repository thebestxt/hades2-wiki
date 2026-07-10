// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

import starLightConf from './configs/starlight.mjs'
import markdownConf from './configs/markdown.mjs'

// https://astro.build/config
export default defineConfig({
    integrations: [
		// @ts-ignore
		starlight({
			customCss: [
				'./src/assets/style/main.scss',
			],
			...starLightConf,
		}),
		vue(),
		mdx(),
	],
	// @ts-ignore
	markdown: markdownConf,
	// vite: {
	// 	css: {
	// 		preprocessorOptions: {
	// 			scss: {
	// 				additionalData: `@use "/src/assets/style/main.scss";`
	// 			}
	// 		}
	// 	}
	// }
});