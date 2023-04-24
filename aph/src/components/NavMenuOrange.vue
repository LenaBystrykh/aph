<template>
    <nav class="menu-light">
        <img src="@/assets/logo_orange.png">
        <div class="menu-light-items">
            <router-link to="/" class="orange-menu-item">о нас</router-link>
            <div class="light-photographers">
                <router-link to="/" class="orange-menu-item">фотографы</router-link>
                <div class="light-dropdown-photographers">
                    <router-link :to="{name:'matvey'}">matvey</router-link>
                    <router-link :to="{name:'alena'}">alena</router-link>
                    <router-link :to="{name:'katya'}">katya</router-link>
                </div>
            </div>
            
            <router-link to="/" class="orange-menu-item">отзывы</router-link>
            <router-link to="/" class="orange-menu-item">контакты</router-link>
        </div>
    </nav>
</template>

<style>
.menu-light {
    position: relative;
    padding: 40px 0 0 0;
    width: 100%;
    height: 81px;
    background: #EAE6D7;
}

.menu-light-items {
    width: calc(50% - 71px - 16%);
    height: 81px;
    position: absolute;
    top: 40px;
    right: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #EAE6D7;
}

.orange-menu-item {
    font-weight: 400;
    font-size: 20px;
    color: #EA7D41;
    text-decoration: none;
    transition: 0.3s;
    background: #EAE6D7;
}

.light-photographers {
    position: relative;
    display: inline-block;
    background: #EAE6D7;
}

.light-dropdown-photographers {
    display: none;
    position: absolute;
    padding-top: 20px;
    transform: translateX(-20%);
    min-width: 160px;
    z-index: 1;
    background: #EAE6D7;
}

.light-dropdown-photographers a {
    background-color: #DCD6BC;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: 0.3s;
    border-radius: 30px;
    margin-bottom: 4px;
    color: #373043;
}

.light-dropdown-photographers a:hover {
    background-color: #EA7D41;
}

.light-photographers:hover .light-dropdown-photographers {
    display: block;
}

.light-photographers:hover .orange-menu-item {
    color: #373043;
}

.orange-menu-item:hover {
    color: #373043;
}
</style>