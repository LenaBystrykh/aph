<template>
    <div class="main-tiles matvey-tiles">
        <div class="tiles-item matvey-item-lefttop"></div>
        <div class="tiles-item matvey-item-righttop"></div>
        <div class="tiles-item matvey-item-leftmid"></div>
        <div class="tiles-item matvey-item-mid"></div>
        <div class="tiles-item matvey-item-right"></div>
        <div class="tiles-item matvey-item-leftbot"></div>
        <div class="tiles-item matvey-item-midbot"></div>
    </div>
</template>

<style>
.matvey-tiles {
    display: grid;
    grid-template-rows: repeat(20, 47px);
    grid-template-columns: repeat(16, 1fr);
    gap: 26px;
    grid-template-areas: "a a a a a a a a a b b b b b b b"
    "a a a a a a a a a b b b b b b b"
    "a a a a a a a a a b b b b b b b"
    "a a a a a a a a a b b b b b b b"
    "a a a a a a a a a b b b b b b b"
    "a a a a a a a a a b b b b b b b"
    "a a a a a a a a a b b b b b b b"
    "c c c c d d d d d d d e e e e e"
    "c c c c d d d d d d d e e e e e"
    "c c c c d d d d d d d e e e e e"
    "c c c c d d d d d d d e e e e e"
    "c c c c d d d d d d d e e e e e"
    "c c c c d d d d d d d e e e e e"
    "c c c c d d d d d d d e e e e e"
    "f f f f g g g g g g g e e e e e"
    "f f f f g g g g g g g e e e e e"
    "f f f f g g g g g g g e e e e e"
    "f f f f g g g g g g g e e e e e"
    "f f f f g g g g g g g e e e e e"
    "f f f f g g g g g g g e e e e e";
}

.matvey-item-lefttop {
    background: url(@/assets/photos/matvey/street-img-0216.webp) center/cover no-repeat;
    grid-area: a;
}

.matvey-item-righttop {
    background: url(@/assets/photos/matvey/studio-img-1697.webp) center/cover no-repeat;
    grid-area: b;
}

.matvey-item-leftmid {
    background: url(@/assets/photos/matvey/studio-img-3746.webp) center/cover no-repeat;
    grid-area: c;
}

.matvey-item-mid {
    background: url(@/assets/photos/matvey/studio-img-3275.webp) center/cover no-repeat;
    grid-area: d;
}

.matvey-item-right {
    background: url(@/assets/photos/matvey/studio-img-3471.webp) center/cover no-repeat;
    grid-area: e;
}

.matvey-item-leftbot {
    background: url(@/assets/photos/matvey/street-img-2947.webp) center/cover no-repeat;
    grid-area: f;
}

.matvey-item-midbot {
    background: url(@/assets/photos/matvey/studio-img-3751.webp) center/cover no-repeat;
    grid-area: g;
}
</style>