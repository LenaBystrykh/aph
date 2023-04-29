<template>
    <div class="portfolio-page">
        <NavMenu />
        <div class="header">
            <p class="styles">студийная / групповая / индивидуальная / love-story</p>
            <div class="header-card">
                <p class="katya-text">Привет, меня зовут Катя! Я увлекаюсь фотографией уже более 5 лет и за это время прошла несколько мастерклассов по работе с цветным светом 🙌🏻<br>Если тебе наскучили фотографии на белом фоне, и тебе хотелось бы что-то новое, то скорее записывайся!</p>
            </div>
            <img class="katya-photo" src="@/assets/photos/k.png">
            <p class="name katya-name">Екатерина Королькова</p>
            <router-link :to="{name: 'signup'}"><button class="btn signup-btn">Записаться на фотосессию</button></router-link>
        </div>

        <div class="portfolio">
            <h2 class="portfolio-header">портфолио</h2>
            <div class="portfolio-section">
                <h3 class="portfolio-subheader orange">love-story съемка</h3>
                <div class="portfolio-section-content">
                    <div class="portfolio-section-main">
                        <img class="portfolio-main-img katya-love-main" src="@/assets/photos/katya/love-img-5473-1.jpg">
                    </div>
                    
                    <div class="carousel-full">
                        <div class="button-left" id="button-left" v-on:click="swipeLeft('studio')"></div>
                        <div class="carousel">
                            <Card id="studio-card1" :imgUrl="links_love[0]" :data-id="0"/>
                            <Card id="studio-card2" :imgUrl="links_love[1]" :data-id="1"/>
                            <Card id="studio-card3" :imgUrl="links_love[2]" :data-id="2"/>
                        </div>
                        <div class="button-right" id="button-right" v-on:click="swipeRight('studio')"></div>
                    </div>
                </div>
            </div>
            <div class="portfolio-section">
                <h3 class="portfolio-subheader orange">street-style съемка</h3>
                <div class="portfolio-section-content">
                    <div class="portfolio-section-main">
                        <img class="portfolio-main-img katya-street-main" src="@/assets/photos/katya/street-img-6507.jpg">
                    </div>
                    <div class="carousel-full">
                        <div class="button-left" id="button-left" v-on:click="swipeLeft('street')"></div>
                        <div class="carousel">
                            <Card id="street-card1" :imgUrl="links_street[0]" :data-id="0"/>
                            <Card id="street-card2" :imgUrl="links_street[1]" :data-id="1"/>
                            <Card id="street-card3" :imgUrl="links_street[2]" :data-id="2"/>
                        </div>
                        <div class="button-right" id="button-right" v-on:click="swipeRight('street')"></div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="services">
            <h3 class="header-third orange">услуги</h3>
            <ul class="services-list">
                <li class="services-list-item"><p>Индивидуальная съемка (1 час)</p><p class="orange">5000₽</p></li>
                <li class="services-list-item"><p>Индивидуальная съемка (2 часа)</p><p class="orange">5000₽</p></li>
                <li class="services-list-item"><p>Индивидуальная съемка в студии (1 час)</p><p class="orange">5000₽</p></li>
                <li class="services-list-item"><p>Индивидуальная съемка в студии (2 часа)</p><p class="orange">5000₽</p></li>
                <li class="services-list-item"><p>Групповая съемка (1 час)</p><p class="orange">5000₽</p></li>
                <li class="services-list-item"><p>Групповая съемка (2 часа)</p><p class="orange">5000₽</p></li>
            </ul>
        </div>

        <div class="calendar-page">
            <h3 class="header-third orange">свободные даты</h3>
            <p class="month">Апрель</p>
            <div class="calendar">
                <div v-for="index in 35" :key="index" class="calendar-cell"></div>
            </div>
            <router-link :to="{name: 'signup'}"><button class="btn signup-btn bottom-btn">Записаться на фотосессию</button></router-link>
        </div>
        <ContactUs />
    </div>
</template>

<script>
  export default {
    name: 'katya',
  }
</script>

<script setup>
    import { onMounted, reactive } from 'vue'
    import NavMenu from '@/components/NavMenuOrange.vue'
    import Footer from '@/components/Footer.vue'
    import Card from '@/components/Card.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import katya_love from '@/seeders/katya_love.js'
    import katya_street from '@/seeders/katya_street.js'

    const links_love = reactive([])
    const links_street = reactive([])  

    onMounted(() => {
        let cells = document.getElementsByClassName('calendar-cell')
        let activeCell = document.createElement('div')
        activeCell.classList.add("active-cell")
        let content = document.createTextNode('07')
        activeCell.appendChild(content)
        cells[11].appendChild(activeCell)
        let activeCell2 = document.createElement('div')
        activeCell2.classList.add("active-cell")
        content = document.createTextNode('16')
        activeCell2.appendChild(content)
        cells[20].appendChild(activeCell2)

        const checkImage = path =>
            new Promise(resolve => {
                const img = new Image()
                img.onload = () => resolve({
                    path,
                    status: 'ok'
                })
                img.src = path
            }).then(result => console.log(result.status, '...image is loaded from', path))

        const loadImg = (paths) => Promise.all(paths.map(checkImage)).then(results => console.log('...all images are loaded'))

        for (let i = 0; i < katya_love.length; i++) {
            links_love.push(katya_love[i].img)
        }
        for (let i = 0; i < katya_street.length; i++) {
            links_street.push(katya_street[i].img)
        }
        loadImg(links_love)
        loadImg(links_street)
    })
    
    function swipeLeft(topic) {
        let card1 = document.getElementById(`${topic}-card1`)
        let card2 = document.getElementById(`${topic}-card2`)
        let card3 = document.getElementById(`${topic}-card3`)
        let cards = [card1, card2, card3]
        let length = 0
        if (topic == 'studio') {
            length = links_love.length - 1
        } else {
            length = links_street.length - 1
        }
        for (let i = 0; i < 3; i++) {
            if (Number(cards[i].dataset.id) == 0) {
                cards[i].dataset.id = length.toString()
            } else {
                cards[i].dataset.id = (Number(cards[i].dataset.id) - 1).toString()
            }
        }
        if (topic == 'studio') {
            card1.firstChild.firstChild.src=links_love[card1.dataset.id]
            card2.firstChild.firstChild.src=links_love[card2.dataset.id]
            card3.firstChild.firstChild.src=links_love[card3.dataset.id]
        } else {
            card1.firstChild.firstChild.src=links_street[card1.dataset.id]
            card2.firstChild.firstChild.src=links_street[card2.dataset.id]
            card3.firstChild.firstChild.src=links_street[card3.dataset.id]
        }
    }

    function swipeRight(topic) {
        let card1 = document.getElementById(`${topic}-card1`)
        let card2 = document.getElementById(`${topic}-card2`)
        let card3 = document.getElementById(`${topic}-card3`)
        let cards = [card1, card2, card3]
        let length = 0
        if (topic == 'studio') {
            length = katya_love.length - 1
        } else {
            length = links_street.length - 1
        }

        for (let i = 0; i < 3; i++) {
            console.log(cards[i].dataset.id)
            if (Number(cards[i].dataset.id) < length) {
                cards[i].dataset.id = (Number(cards[i].dataset.id) + 1).toString()
            } else {
                cards[i].dataset.id = 0
            }
        }
        if (topic == 'studio') {
            card1.firstChild.firstChild.src=links_love[card1.dataset.id]
            card2.firstChild.firstChild.src=links_love[card2.dataset.id]
            card3.firstChild.firstChild.src=links_love[card3.dataset.id]
        } else {
            card1.firstChild.firstChild.src=links_street[card1.dataset.id]
            card2.firstChild.firstChild.src=links_street[card2.dataset.id]
            card3.firstChild.firstChild.src=links_street[card3.dataset.id]
        }
    }
</script>

<style>
@font-face {
    font-family: "OptimaCyr";
    src: url(@/assets/fonts/Optima.woff) format("woff");
    font-weight: 400;
}

.katya-photo {
    left: 10%;
    top: 51%;
    transform: translateY(-48.5%);
}

.katya-name {
    left: 8%;
}

.katya-text {
    font-size: 24px;
    width: 64%;
    padding-left: 30%;
}

.katya-love-main {
    object-position: center;
}

.katya-street-main {
    object-position: center -800px;
}
</style>
