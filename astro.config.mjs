// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '哈迪斯 II',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thebestxt/hades2-wiki' }],
			// 为此网站设置英语为默认语言。
			locales: {
				// 简体中文文档在 `src/content/docs/zh-cn/` 中。
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			sidebar: [
				{
					label: 'Intro',
					slug: 'intro'
				},
				{
					label: 'Characters',
					items: [
						{ label: 'Melinoe', slug: 'characters/melinoe' }
					]
				}
			],
		}),
	],
});
