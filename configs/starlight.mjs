import globalConfigs from "./globalConfigs.mjs"
const { hadesSourceHost } = globalConfigs
export default {
    title: '哈迪斯 II',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thebestxt/hades2-wiki' }],
    components: {
        Sidebar: './src/components/CustomSidebar.astro'
    },
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
            label: '概述',
            slug: 'intro'
        },
        {
            label: '角色',
            items: [
                { label: '墨利诺厄', slug: 'characters/melinoe', attrs: { 'data-icon': `${hadesSourceHost}/melinoe_icon.png`} },
                { label: '赫卡忒', slug: 'characters/hecate', attrs: { 'data-icon': `${hadesSourceHost}/hecate_icon.png` } },
            ]
        }
    ],
}