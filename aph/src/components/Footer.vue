<template>
    <footer>
        <div class="info">
            <div>
                <a class="info-item" href="https://instagram.com/aph.alive">Instagram</a>
                <a class="info-item" href="https://vk.com/aph.alive">Вконтакте</a>
                <a class="info-item" href="https://t.me/alivephotosaph">Telegram</a>
            </div>
            <div>
                <p class="info-item">info@aph.com</p>
                <p class="info-item">+ 7 (912) 483-52-52</p>
            </div>
        </div>
        <img src="@/assets/logo_footer.png">
        <div class="footer-menu-items">
            <router-link to="/" class="footer-menu-item">о нас</router-link>
            <router-link to="/" class="footer-menu-item">фотографы</router-link>
            <router-link to="/" class="footer-menu-item">отзывы</router-link>
            <router-link :to="{name: 'contacts'}" class="footer-menu-item">контакты</router-link>
        </div>
    </footer>
</template>

<style>
footer {
    position: relative;
    width: 100%;
    height: 280px;
    background: #EA7D41;
}

footer img{
    background: #EA7D41;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.info {
    width: calc(50% - 25px - 16%);
    height: 70%;
    position: absolute;
    top: 30%;
    left: 8%;
    display: flex;
    justify-content: space-around;
    background: #EA7D41;
}

.info div{
    background: #EA7D41;
}

.info-item {
    color: #373043;
    font-size: 20px;
    text-decoration: none;
    background: #EA7D41;
    display: block;
    text-align: left;
    line-height: 40px;
    transition: 0.3s;
}

.info-item:hover {
    color: #DCD6BC;
    cursor: pointer;
}

.footer-menu-items {
    width: calc(50% - 25px - 16%);
    height: 280px;
    position: absolute;
    bottom: 0;
    right: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #EA7D41;
}

.footer-menu-item {
    font-weight: 400;
    font-size: 20px;
    color: #373043;
    text-decoration: none;
    background: #EA7D41;
    transition: 0.3s;
}

.footer-menu-item:hover {
    color: #DCD6BC;
    cursor: pointer;
}
</style>