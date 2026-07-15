import globalConfigs from "../globalConfigs.mjs"
const { hadesSourceHost } = globalConfigs

export default [
    {
        label: '月牙镐',
        slug: 'tools/pickax',
        attrs: { 'data-icon': `${hadesSourceHost}/tools/Pickaxe.webp` }
    },
    {
        label: '安魂石板',
        slug: 'tools/exorcismbook',
        attrs: { 'data-icon': `${hadesSourceHost}/tools/ExorcismBook.webp` }
    },
    {
        label: '银辉铲',
        slug: 'tools/shovel',
        attrs: { 'data-icon': `${hadesSourceHost}/tools/Shovel.webp` }
    },
    {
        label: '钓鱼竿',
        slug: 'tools/fishingrod',
        attrs: { 'data-icon': `${hadesSourceHost}/tools/FishingRod.webp` }
    },
]