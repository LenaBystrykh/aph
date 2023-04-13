<template>
    <NavMenu />
    <div class="header">
        <p class="styles">street-style / студийная / групповая / семейная</p>
        <div class="header-card">
            <p>Привет! Меня зовут Матвей. Я коммерческий лайфстайл фотограф.<br><br>С самого детства меня интересуют творчество и искусство. 
                Я с большим интересом наблюдаю за фотографами, режиссерами и художниками и их работами. В 2020 году мне посчастливилось найти настоящую страсть к фотографии. 
                Мне очень нравится общаться с большим количеством разных,ярких и интересных людей. 
                Я считаю,фотография это отличный способ общения друг с другом для создания прекрасных фотографий и проектов!</p>
        </div>
        <img class="" src="@/assets/photos/matvey.png">
        <p class="name">Матвей Ураков</p>
        <button>Записаться на фотосессию</button>
    </div>

    <div class="portfolio">
        <h2 class="portfolio-header">портфолио</h2>
        <div class="portfolio-section">
            <h3 class="portfolio-subheader orange">студийная съемка</h3>
            <div class="portfolio-studio">
                <div class="portfolio-section-main">
                    <img class="studio-main" src="@/assets/photos/matvey/IMG_3471.jpg">
                </div>
                
                <div class="carousel-full">
                    <div class="button-left" id="button-left" v-on:click="swipeLeft('studio')"></div>
                    <div class="carousel">
                        <Card id="studio-card1" :imgUrl="matvey_studio[0].img" :data-id="0"/>
                        <Card id="studio-card2" :imgUrl="matvey_studio[1].img" :data-id="1"/>
                        <Card id="studio-card3" :imgUrl="matvey_studio[2].img" :data-id="2"/>
                    </div>
                    <div class="button-right" id="button-right" v-on:click="swipeRight('studio')"></div>
                </div>
            </div>
        </div>
        <div class="portfolio-section">
            <h3 class="portfolio-subheader orange">street-style съемка</h3>
            <div class="portfolio-street">
                <div class="portfolio-section-main">
                    <img class="street-main" src="@/assets/photos/matvey/IMG_0216.jpg">
                </div>
                <div class="carousel-full">
                    <div class="button-left" id="button-left" v-on:click="swipeLeft('street')"></div>
                    <div class="carousel">
                        <Card id="street-card1" :imgUrl="matvey_street[0].img" :data-id="0"/>
                        <Card id="street-card2" :imgUrl="matvey_street[1].img" :data-id="1"/>
                        <Card id="street-card3" :imgUrl="matvey_street[2].img" :data-id="2"/>
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
        <button class="bottom-button">Записаться на фотосессию</button>
    </div>
    <div class="contact-us">
        <div class="contact-img__wrapper">
            <img class="contact-img" src="@/assets/photos/matvey/IMG_1113.jpg">
        </div>
        <div class="question-form">
            <div class="question-left">
                <p class="question-title">задайте нам вопрос</p>
                <p class="question-text">Уточните условия и этапы проведения вашей съемки или задайте вопрос о сотрудничестве</p>
            </div>
            <div class="question-right">
                <input class="question-input" type="text" placeholder="Ваш вопрос">
                <button class="send-question-btn">Отправить</button>
            </div>
            
        </div>
        
    </div>
    <Footer />
</template>

<script setup>
    import { onMounted } from 'vue'
    import NavMenu from './components/NavMenu.vue'
    import Footer from './components/Footer.vue'
    import Card from './components/Card.vue'
    import matvey_studio from './seeders/matvey_studio.js'
    import matvey_street from './seeders/matvey_street.js'

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
    })
    function swipeLeft(topic) {
        let card1 = document.getElementById(`${topic}-card1`)
        let card2 = document.getElementById(`${topic}-card2`)
        let card3 = document.getElementById(`${topic}-card3`)
        let cards = [card1, card2, card3]
        let length = 0
        if (topic == 'studio') {
            length = matvey_studio.length - 1
        } else {
            length = matvey_street.length - 1
        }
        for (let i = 0; i < 3; i++) {
            if (Number(cards[i].dataset.id) == 0) {
                cards[i].dataset.id = length.toString()
            } else {
                cards[i].dataset.id = (Number(cards[i].dataset.id) - 1).toString()
            }
        }
        if (topic == 'studio') {
            card1.firstChild.firstChild.src=matvey_studio[card1.dataset.id].img
            card2.firstChild.firstChild.src=matvey_studio[card2.dataset.id].img
            card3.firstChild.firstChild.src=matvey_studio[card3.dataset.id].img
        } else {
            card1.firstChild.firstChild.src=matvey_street[card1.dataset.id].img
            card2.firstChild.firstChild.src=matvey_street[card2.dataset.id].img
            card3.firstChild.firstChild.src=matvey_street[card3.dataset.id].img
        }
    }

    function swipeRight(topic) {
        let card1 = document.getElementById(`${topic}-card1`)
        let card2 = document.getElementById(`${topic}-card2`)
        let card3 = document.getElementById(`${topic}-card3`)
        let cards = [card1, card2, card3]
        let length = 0
        if (topic == 'studio') {
            length = matvey_studio.length - 1
        } else {
            length = matvey_street.length - 1
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
            card1.firstChild.firstChild.src=matvey_studio[card1.dataset.id].img
            card2.firstChild.firstChild.src=matvey_studio[card2.dataset.id].img
            card3.firstChild.firstChild.src=matvey_studio[card3.dataset.id].img
        } else {
            card1.firstChild.firstChild.src=matvey_street[card1.dataset.id].img
            card2.firstChild.firstChild.src=matvey_street[card2.dataset.id].img
            card3.firstChild.firstChild.src=matvey_street[card3.dataset.id].img
        }
    }
</script>

<style>
@font-face {
    font-family: "OptimaCyr";
    src: url(@/assets/fonts/Optima.woff) format("woff");
    font-weight: 400;
}
* {
  padding: 0;
  margin: 0;
  background: #EAE6D7;
  text-align: center;
  font-family: "OptimaCyr";
}

.header {
    height: calc(100vh - 81px - 40px);
}

.header img {
    position: absolute;
    background: none;
    left: 8%;
    top: 40%;
    transform: translateY(-50%);
}

.name {
    text-transform: uppercase;
    font-size: 44px;
    position: absolute;
    top: 72%;
    left: 16%;
    color: #373043;
    font-family: "OptimaCyr";
    font-weight: 400;
}

.styles {
    font-size: 36px;
    position: absolute;
    top: 40%;
    left: 650px;
    font-family: "OptimaCyr";
    font-weight: 400;
}

.header-card {
    width: 75%;
    height: 214px;
    background: #DCD6BC;
    border-radius: 102px;
    position: absolute;
    right: 8%;
    top: 40%;
    transform: translateY(50px);
    display: flex;
    align-items: center;
}

.header-card p {
    color: #373043;
    background: none;
    text-align: left;
    font-size: 18px;
    width: 64%;
    padding-left: 34%;
    font-family: "OptimaCyr";
    font-weight: 400;
}

button {
    background: #EA7D41;
    border-radius: 102px;
    width: 30%;
    height: 74px;
    font-size: 26px;
    border: none;
    position: absolute;
    bottom: 18%;
    right: 8%;
    font-family: "OptimaCyr";
    font-weight: 400;
}

.portfolio-header {
    font-size: 200px;
    color: #373043;
    text-align: left;
    text-transform: uppercase;
    font-family: "OptimaCyr";
    font-weight: 400;
}

.portfolio-subheader {
    font-size: 90px;
    text-transform: uppercase;
    text-align: right;
    padding-right: 20px;
    font-family: "OptimaCyr";
    font-weight: 400;
}

.header-third {
    font-size: 60px;
    text-transform: uppercase;
    font-family: "OptimaCyr";
    font-weight: 400;
    text-align: left;
    margin-left: 8%;
    background: none;
    padding-top: 60px;
}

.portfolio-section {
    position: relative;
    height: 170vh;
    width: 100%;
}

.portfolio-section-main {
    width: 100%;
    height: 100vh;
}

.studio-main, .street-main {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;    
    border-radius: 100px;
}

.portfolio-studio, .portfolio-street {
    position: relative;
}

.portfolio-studio img {
    width: 100%;
}

.carousel-full {
    position: absolute;
    top: 80%;
    width: 100%;
    background: none;
}

.carousel {
    width: 84%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: none;
}

.button-left{
    background-image: url('@/assets/left.png');
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 4%;
}

.button-right{
    background-image: url('@/assets/right.png');
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    right: 4%;
}

.services {
    background: #373043;
    border-radius: 102px;
    width: 100%;
    height: 100vh;
}

.services-list {
    list-style-type: none;
    margin-top: 90px;
    height: 67vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #373043;
    margin-left: 8%;
    margin-right: 8%;
}

.services-list-item {
    display: flex;
    font-size: 36px;
    color: #EAE6D7;
    background: #373043;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
}
.services-list-item p{
    background: #373043;
}
.orange {
    color: #EA7D41;
}

.calendar-page {
    width: 100%;
    height: 100vh;
    position: relative;
}
.month {
    color: #373043;
    font-size: 48px;
    font-weight: 400;
    padding: 60px 0;
}

.calendar {
    margin: auto;
    width: 84%;
    height: 40vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 8vh);
    border: #EA7D41 solid 1px;
    border-width: 2px 1px 2px 1px;
}

.calendar-cell {
    border-left: #EA7D41 solid 1px;
    border-right: #EA7D41 solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.active-cell {
    width:100%;
    height: 60%;
    background-color: #EA7D41;
    font-size: 48px;
    color: #FFFFFF;
    font-weight: 400;
}

.bottom-button {
    bottom: 8%;
    font-size: 30px;
}

.contact-us {
    width: 100%;
    height: calc(40vh + 280px);
    position: relative;
}

.card-img__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.contact-us img{
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
}

.question-form {
    width: 84%;
    height: 250px;
    background: rgba(220, 214, 188, 0.84);
    border-radius: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: row;
}

.question-left {
    width: 22%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: none;
    padding-left: 8%;
}

.question-title {
    font-size: 44px;
    font-weight: 400;
    text-transform: uppercase;
    color: #373043;
    background: none;
    text-align: left;
    padding: 30px 0;
}

.question-text {
    font-size: 18px;
    font-weight: 400;
    color: #373043;
    background: none;
    text-align: left;
}

.question-right {
    width: 70%;
    background: none;
    position: relative;
}

.question-input {
    height: 60px;
    width: 600px;
    background: #373043;
    border: none;
    color: #FFFFFF;
    text-align: left;
    font-size: 18px;
    border-radius: 100px;    
    padding-left: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25%;
}

.question-input::placeholder {
    color: #9F998F;
    text-align: left;
    font-size: 18px;

}

.send-question-btn {
    width: 200px;
    height: 60px;
    font-size: 18px;    
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16%;
}
</style>
