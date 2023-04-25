<template>
    <nav class="menu-dark">
        <img src="@/assets/logo_white.png" style="background: none;">
        <div class="menu-dark-items">
            <router-link to="/" class="light-menu-item">о нас</router-link>
            <div class="dark-photographers">
                <router-link to="/" class="light-menu-item">фотографы</router-link>
                <div class="dark-dropdown-photographers">
                    <div>street-style</div>
                    <div>love-story</div>
                    <div>студийная</div>
                    <div>семейная</div>
                </div>
            </div>
            
            <router-link to="/" class="light-menu-item">отзывы</router-link>
            <router-link to="/" class="light-menu-item">контакты</router-link>
        </div>
    </nav>
</template>

<style>
.menu-dark {
    position: relative;
    padding: 40px 0 0 0;
    width: 100%;
    height: 81px;
    background: none;
}

.menu-dark-items {
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

.light-menu-item {
    font-weight: 400;
    font-size: 20px;
    color: #DCD6BC;
    text-decoration: none;
    transition: 0.3s;
    background: none;
}

.dark-photographers {
    position: relative;
    display: inline-block;
    background: none;
}

.dark-dropdown-photographers {
    display: none;
    position: absolute;
    padding-top: 20px;
    transform: translateX(-20%);
    min-width: 160px;
    z-index: 1;
    background: none;
}

.dark-dropdown-photographers div {
    background-color: #DCD6BC;
    width: 207px;
    height: 41px;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 30px;
    margin-bottom: 2px;
    font-size: 24px;
    color: #373043;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dark-dropdown-photographers div:nth-child(2) {
    background-color: #373043;
    border: 2px solid #DCD6BC;
    color: #EA7D41;
}

.dark-dropdown-photographers div:nth-child(3) {
    background-color: #EA7D41;
}

.dark-photographers:hover .dark-dropdown-photographers {
    display: block;
}

.dark-photographers:hover .light-menu-item {
    color: #EA7D41;
}

.light-menu-item:hover {
    color: #EA7D41;
}
</style>