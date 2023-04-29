<template>
    <nav class="menu-orange">
        <img src="@/assets/logo_orange.png">
        <div class="menu-orange-items">
            <router-link to="/" class="orange-menu-item">о нас</router-link>
            <div class="orange-photographers">
                <router-link to="/" class="orange-menu-item">фотографы</router-link>
            </div>
            
            <router-link to="/" class="orange-menu-item">отзывы</router-link>
            <router-link :to="{name: 'contacts'}" class="orange-menu-item">контакты</router-link>
        </div>
    </nav>
</template>

<style>
.menu-orange {
    position: relative;
    padding: 40px 0 0 0;
    width: 100%;
    height: 81px;
    background: none;
}

.menu-orange-items {
    width: calc(50% - 71px - 16%);
    height: 81px;
    position: absolute;
    top: 40px;
    right: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: none;
}

.orange-menu-item {
    font-weight: 400;
    font-size: 20px;
    color: #EA7D41;
    text-decoration: none;
    transition: 0.3s;
    background: none;
}

.orange-photographers {
    position: relative;
    display: inline-block;
    background: none;
}

.orange-menu-item:hover {
    color: #373043;
}
</style>