<template>
    <div class="main-tiles katya-tiles">
        <div class="tiles-item katya-item-lefttop"></div>
        <div class="tiles-item katya-item-midtop"></div>
        <div class="tiles-item katya-item-righttop"></div>
        <div class="tiles-item katya-item-rightmid"></div>
        <div class="tiles-item katya-item-leftbot"></div>
        <div class="tiles-item katya-item-midbot"></div>
        <div class="tiles-item katya-item-rightbot"></div>
    </div>
</template>

<style>
.katya-tiles {
    display: grid;
    grid-template-rows: repeat(6, 218px);
    grid-template-columns: repeat(14, 1fr);
    gap: 22px;
    grid-template-areas: "a a a b b b b b b b c c c c"
    "a a a b b b b b b b d d d d"
    "a a a b b b b b b b d d d d"
    "e e e e e f f f f f g g g g"
    "e e e e e f f f f f g g g g"
    "e e e e e f f f f f g g g g";
}

.katya-item-lefttop {
    background: url(@/assets/photos/katya/img-2443.webp) center/cover no-repeat;
    grid-area: a;
}

.katya-item-midtop {
    background: url(@/assets/photos/katya/street-img-9059-1.webp) center/cover no-repeat;
    grid-area: b;
}

.katya-item-righttop {
    background: url(@/assets/photos/katya/street-img-9485-2.webp) center/cover no-repeat;
    grid-area: c;
}

.katya-item-rightmid {
    background: url(@/assets/photos/katya/love-img-5500.webp) center/cover no-repeat;
    grid-area: d;
}

.katya-item-leftbot {
    background: url(@/assets/photos/katya/love-img-5473-1.webp) center/cover no-repeat;
    grid-area: e;
}

.katya-item-midbot {
    background: url(@/assets/photos/katya/street-img-6507.webp) center/cover no-repeat;
    grid-area: f;
}

.katya-item-rightbot {
    background: url(@/assets/photos/katya/love-img-6063.webp) center/cover no-repeat;
    grid-area: g;
}
</style>