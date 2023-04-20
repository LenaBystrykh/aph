<template>
    <nav class="menu">
        <img src="@/assets/logo_orange.png">
        <div class="menu-items">
            <router-link to="/" class="menu-item">о нас</router-link>
            <div class="photographers">
                <router-link to="/" class="menu-item">фотографы</router-link>
                <div class="dropdown-photographers">
                    <router-link :to="{name:'matvey'}">matvey</router-link>
                    <router-link :to="{name:'alena'}">alena</router-link>
                    <router-link :to="{name:'katya'}">katya</router-link>
                </div>
            </div>
            
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
    width: calc(50% - 71px - 16%);
    height: 81px;
    position: absolute;
    top: 40px;
    right: 8%;
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
    transition: 0.3s;
}

.photographers {
    position: relative;
    display: inline-block;
}

.dropdown-photographers {
    display: none;
    position: absolute;
    padding-top: 20px;
    transform: translateX(-20%);
    min-width: 160px;
    z-index: 1;
}

.dropdown-photographers a {
    background-color: #DCD6BC;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: 0.3s;
    border-radius: 30px;
    margin-bottom: 4px;
    color: #373043;
}

.dropdown-photographers a:hover {
    background-color: #EA7D41;
}

.photographers:hover .dropdown-photographers {
    display: block;
}

.photographers:hover .menu-item {
    color: #373043;
}

.menu-item:hover {
    color: #373043;
}
</style>