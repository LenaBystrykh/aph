<template>
    <nav class="menu">
        <img src="@/assets/logo_orange.png">
        <div class="menu-items">
            <router-link to="/" class="menu-item">о нас</router-link>
            <router-link to="/" class="menu-item selected">фотографы</router-link>
            <router-link to="/" class="menu-item">отзывы</router-link>
            <router-link to="/" class="menu-item">контакты</router-link>
        </div>
    </nav>
</template>

<style>
.menu {
    position: relative;
    padding: 40px 0 0 0;
    width: 100%;
    height: 81px;
}

.menu-items {
    width: calc(50% - 71px - 10%);
    height: 81px;
    position: absolute;
    top: 40px;
    right: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.menu-item {
    font-weight: 400;
    font-size: 20px;
    color: #EA7D41;
    text-decoration: none;
}

.selected {
    color: #373043;
}
</style>