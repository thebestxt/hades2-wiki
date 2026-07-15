import globalConfigs from "../globalConfigs.mjs"
const { hadesSourceHost } = globalConfigs

export default [
    {
        label: '女巫之杖 - 戴斯奇拉',
        slug: 'weapon/staff',
        attrs: { 'data-icon': `${hadesSourceHost}/Staff.webp` }
    },
    {
        label: '姊妹双刃 - 利姆欧罗',
        slug: 'weapon/blade',
        attrs: { 'data-icon': `${hadesSourceHost}/Blade.webp` }
    },
    {
        label: '暗影之炬 - 伊格尼姆',
        slug: 'weapon/flame',
        attrs: { 'data-icon': `${hadesSourceHost}/Flame.webp` }
    },
    {
        label: '月石之斧 - 佐利菲特',
        slug: 'weapon/axe',
        attrs: { 'data-icon': `${hadesSourceHost}/Axe.webp` }
    },
    {
        label: '银白之颅 - 勒瓦尔',
        slug: 'weapon/skull',
        attrs: { 'data-icon': `${hadesSourceHost}/Skull.webp` }
    },
    {
        label: '漆黑战衣 - 柯辛斯',
        slug: 'weapon/coat',
        attrs: { 'data-icon': `${hadesSourceHost}/Coat.webp` }
    },
]