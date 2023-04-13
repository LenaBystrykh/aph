<template>
    <div class="card">
        <div v-if="imgUrl" class="card-img__wrapper">
            <img class="card-img" :src="imgUrl" :data-id="cardID">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgUrl: {
            type: String
        },
        cardID: {
            type: String
        }
    }
}
</script>

<style>
    .card {
        height: 69vh;
    }
    .card-img__wrapper {
        width: 46vh;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .card-img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: 100%;
    }
</style>