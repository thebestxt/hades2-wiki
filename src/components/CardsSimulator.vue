<script setup lang="js">
import R2Image from './R2Image.astro';
import globalConfig from '../../configs/globalConfigs.mjs'
const cardsData = [
    { name: '女术士', },
    
]
</script>
<template>
    <div class="cards-simulator-container">
        <div class="cards">
            <div
                v-for="(v, k) in cardsData"
                :key="k"
                :style="{ backgroundImage: `url('${globalConfig.hadesSourceHost}/cards/${k + 1}.webp')` }"
                class="card-item">
                {{ v.name }}
            </div>
        </div>
        <div class="infos">
            <img class="card-image" :src="`${globalConfig.hadesSourceHost}/cards/1.webp`" alt="">
            <div class="card-name">复仇三女神</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sl-container {
    width: 100%;
    margin-inline: 0;
}
.cards-simulator-container {
    width: 80vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    background-color: pink;
    .cards {
        width: 60%;
        overflow-y: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .card-item {
            width: 65px;
            height: 103px;
            margin: 0;
            background-size: contain;
            margin: 10px;
        }
    }
    .infos {
        width: 40%;

    }
}
</style>