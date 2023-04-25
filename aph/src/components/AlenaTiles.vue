<template>
    <div class="main-tiles alena-tiles">
        <div class="tiles-item alena-item-lefttop"></div>
        <div class="tiles-item alena-item-midtop"></div>
        <div class="tiles-item alena-item-righttop"></div>
        <div class="tiles-item alena-item-leftmid"></div>
        <div class="tiles-item alena-item-leftmid2"></div>
        <div class="tiles-item alena-item-rightmid"></div>
        <div class="tiles-item alena-item-rightmid2"></div>
        <div class="tiles-item alena-item-leftbot"></div>
        <div class="tiles-item alena-item-midbot"></div>
        <div class="tiles-item alena-item-rightbot"></div>
    </div>
</template>

<style>
.alena-tiles {
    display: grid;
    grid-template-rows: repeat(11, 104px);
    grid-template-columns: repeat(14, 1fr);
    gap: 26px;
    grid-template-areas: "a a a b b b b b b b c c c c"
    "a a a b b b b b b b c c c c"
    "a a a b b b b b b b c c c c"
    "a a a b b b b b b b c c c c"
    "d d d e e e f f f f f g g g"
    "d d d e e e f f f f f g g g"
    "d d d e e e f f f f f g g g"
    "h h h h h h i i i j j j j j"
    "h h h h h h i i i j j j j j"
    "h h h h h h i i i j j j j j"
    "h h h h h h i i i j j j j j";
}

.alena-item-lefttop {
    background: url(@/assets/photos/alena/studio-img-8274.webp) center/cover no-repeat;
    grid-area: a;
}

.alena-item-midtop {
    background: url(@/assets/photos/alena/img-1981.webp) center/cover no-repeat;
    grid-area: b;
}

.alena-item-righttop {
    background: url(@/assets/photos/alena/img-8001.webp) center/cover no-repeat;
    grid-area: c;
}

.alena-item-leftmid {
    background: url(@/assets/photos/alena/street-img-4210.webp) center/cover no-repeat;
    grid-area: d;
}

.alena-item-leftmid2 {
    background: url(@/assets/photos/alena/img-8660.webp) center/cover no-repeat;
    grid-area: e;
}

.alena-item-rightmid {
    background: url(@/assets/photos/alena/love-img-1532.webp) center/cover no-repeat;
    grid-area: f;
}

.alena-item-rightmid2 {
    background: url(@/assets/photos/main/img-1974.webp) center/cover no-repeat;
    grid-area: g;
}

.alena-item-leftbot {
    background: url(@/assets/photos/alena/img-1049.webp) center/cover no-repeat;
    grid-area: h;
}

.alena-item-midbot {
    background: url(@/assets/photos/alena/studio-img-0518-1.webp) center/cover no-repeat;
    grid-area: i;
}

.alena-item-rightbot {
    background: url(@/assets/photos/alena/street-img-3172.webp) center/cover no-repeat;
    grid-area: j;
}
</style>