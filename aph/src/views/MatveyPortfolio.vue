<template>
    <NavMenu />
    <div class="header">
        <p class="styles">street-style / студийная / групповая / семейная</p>
        <div class="header-card">
            <p class="matvey-text">Привет! Меня зовут Матвей. Я коммерческий лайфстайл фотограф.<br><br>С самого детства меня интересуют творчество и искусство. Я с большим интересом наблюдаю за фотографами, режиссерами и художниками и их работами. В 2020 году мне посчастливилось найти настоящую страсть к фотографии. Мне очень нравится общаться с большим количеством разных,ярких и интересных людей. Я считаю,фотография это отличный способ общения друг с другом для создания прекрасных фотографий и проектов!</p>
        </div>
        <img class="matvey-photo" src="@/assets/photos/m.png">
        <p class="name matvey-name">Матвей Ураков</p>
        <button class="btn signup-btn">Записаться на фотосессию</button>
    </div>

    <div class="portfolio">
        <h2 class="portfolio-header">портфолио</h2>
        <div class="portfolio-section">
            <h3 class="portfolio-subheader orange">студийная съемка</h3>
            <div class="portfolio-section-content">
                <div class="portfolio-section-main">
                    <img class="portfolio-main-img matvey-studio-main" src="@/assets/photos/matvey/studio-img-3471.webp">
                </div>
                
                <div class="carousel-full">
                    <div class="button-left" id="button-left" v-on:click="swipeLeft('studio')"></div>
                    <div class="carousel">
                        <Card id="studio-card1" :imgUrl="links_studio[0]" :data-id="0"/>
                        <Card id="studio-card2" :imgUrl="links_studio[1]" :data-id="1"/>
                        <Card id="studio-card3" :imgUrl="links_studio[2]" :data-id="2"/>
                    </div>
                    <div class="button-right" id="button-right" v-on:click="swipeRight('studio')"></div>
                </div>
            </div>
        </div>
        <div class="portfolio-section">
            <h3 class="portfolio-subheader orange">street-style съемка</h3>
            <div class="portfolio-section-content">
                <div class="portfolio-section-main">
                    <img class="portfolio-main-img matvey-street-main" src="@/assets/photos/matvey/street-img-0216.webp">
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
        <button class="btn signup-btn bottom-btn">Записаться на фотосессию</button>
    </div>
    <ContactUs />
    <Footer></Footer>
</template>

<script>
  export default {
    name: 'matvey',
  }
</script>

<script setup>
    import { onMounted, reactive } from 'vue'
    import NavMenu from '@/components/NavMenuOrange.vue'
    import Footer from '@/components/Footer.vue'
    import Card from '@/components/Card.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import matvey_studio from '@/seeders/matvey_studio.js'
    import matvey_street from '@/seeders/matvey_street.js'

    const links_studio = reactive([])
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

        for (let i = 0; i < matvey_studio.length; i++) {
            links_studio.push(matvey_studio[i].img)
        }
        for (let i = 0; i < matvey_street.length; i++) {
            links_street.push(matvey_street[i].img)
        }
        loadImg(links_studio)
        loadImg(links_street)
    })
    function swipeLeft(topic) {
        let card1 = document.getElementById(`${topic}-card1`)
        let card2 = document.getElementById(`${topic}-card2`)
        let card3 = document.getElementById(`${topic}-card3`)
        let cards = [card1, card2, card3]
        let length = 0
        if (topic == 'studio') {
            length = links_studio.length - 1
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
            card1.firstChild.firstChild.src=links_studio[card1.dataset.id]
            card2.firstChild.firstChild.src=links_studio[card2.dataset.id]
            card3.firstChild.firstChild.src=links_studio[card3.dataset.id]
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
            length = links_studio.length - 1
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
            card1.firstChild.firstChild.src=links_studio[card1.dataset.id]
            card2.firstChild.firstChild.src=links_studio[card2.dataset.id]
            card3.firstChild.firstChild.src=links_studio[card3.dataset.id]
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

.matvey-photo {
    left: 4%;
    top: 40%;
    transform: translateY(-50%);
}

.matvey-name {
    left: 16%;
}

.matvey-text {
    font-size: 18px;
    width: 64%;
    padding-left: 34%;
}

.matvey-street-main, .matvey-studio-main {
    object-position: center;
}
</style>
