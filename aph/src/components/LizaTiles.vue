<template>
    <div class="main-tiles liza-tiles">
        <div class="tiles-item liza-item-left"></div>
        <div class="tiles-item liza-item-top"></div>
        <div class="tiles-item liza-item-midbot"></div>
        <div class="tiles-item liza-item-rightbot"></div>
    </div>
</template>

<style>
.liza-tiles {
    display: grid;
    grid-template-rows: repeat(9, 122px);
    grid-template-columns: repeat(7, 1fr);
    gap: 40px;
    grid-template-areas: "a a a b b b b"
    "a a a b b b b"
    "a a a b b b b"
    "a a a b b b b"
    "a a a c c d d"
    "a a a c c d d"
    "a a a c c d d"
    "a a a c c d d"
    "a a a c c d d";
}

.liza-item-left {
    background: url(@/assets/photos/liza/img-2023.webp) center/cover no-repeat;
    grid-area: a;
}

.liza-item-top {
    background: url(@/assets/photos/liza/img-2022.webp) center/cover no-repeat;
    grid-area: b;
}

.liza-item-midbot {
    background: url(@/assets/photos/liza/img-7507.webp) center/cover no-repeat;
    grid-area: c;
}

.liza-item-rightbot {
    background: url(@/assets/photos/liza/img-9963.webp) center/cover no-repeat;
    grid-area: d;
}
</style>