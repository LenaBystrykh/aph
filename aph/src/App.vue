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
        <img src="@/assets/photos/matvey.png">
        <p class="name">Матвей Ураков</p>
        <button>Записаться на фотосессию</button>
    </div>

    <div class="portfolio">
        <h2 class="portfolio-header">портфолио</h2>
        <h3 class="portfolio-subheader">студийная съемка</h3>
        <div class="portfolio_studio">
            <img src="@/assets/photos/portfolio_st_1.png">
            <div class="carousel-full">
                <div class="button-left" id="button-left" v-on:click="swipeLeft"></div>
                <div class="carousel">
                    <Card id="card1" :imgUrl="matvey_studio[0].img" :data-id="0"/>
                    <Card id="card2" :imgUrl="matvey_studio[1].img" :data-id="1"/>
                    <Card id="card3" :imgUrl="matvey_studio[2].img" :data-id="2"/>
                </div>
                <div class="button-right" id="button-right" v-on:click="swipeRight"></div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import NavMenu from './components/NavMenu.vue'
    import Card from './components/Card.vue'
    import matvey_studio from './seeders/matvey_studio.js'

    function swipeLeft() {
        let arrow_right = document.getElementById('button-right')
        arrow_right.classList.remove("inactive-arrow")
        let card1 = document.getElementById('card1')
        let card2 = document.getElementById('card2')
        let card3 = document.getElementById('card3')
        if (Number(card1.dataset.id) > 0) {
            card1.dataset.id = (Number(card1.dataset.id) - 1).toString()
            card2.dataset.id = (Number(card2.dataset.id) - 1).toString()
            card3.dataset.id = (Number(card3.dataset.id) - 1).toString()
            card1.firstChild.firstChild.src=matvey_studio[card1.dataset.id].img
            card2.firstChild.firstChild.src=matvey_studio[card2.dataset.id].img
            card3.firstChild.firstChild.src=matvey_studio[card3.dataset.id].img
            if (Number(card1.dataset.id) == 0) {
                let arrow_left = document.getElementById('button-left')
                arrow_left.classList.add("inactive-arrow")
            }
        }
    }

    function swipeRight() {
        let arrow_left = document.getElementById('button-left')
        arrow_left.classList.remove("inactive-arrow")
        let card1 = document.getElementById('card1')
        let card2 = document.getElementById('card2')
        let card3 = document.getElementById('card3')
        if (Number(card3.dataset.id) < matvey_studio.length - 1) {
            card1.dataset.id = (Number(card1.dataset.id) + 1).toString()
            card2.dataset.id = (Number(card2.dataset.id) + 1).toString()
            card3.dataset.id = (Number(card3.dataset.id) + 1).toString()
            console.log(card1.dataset.id)
            card1.firstChild.firstChild.src=matvey_studio[card1.dataset.id].img
            card2.firstChild.firstChild.src=matvey_studio[card2.dataset.id].img
            card3.firstChild.firstChild.src=matvey_studio[card3.dataset.id].img
            if (Number(card3.dataset.id) == matvey_studio.length - 1) {
                let arrow_right = document.getElementById('button-right')
                arrow_right.classList.add("inactive-arrow")
            }

        }
    }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  background: #EAE6D7;
  text-align: center;
}

.header {
    height: calc(100vh - 81px - 40px);
}

.header img {
    position: absolute;
    background: none;
    left: 5%;
    top: 40%;
    transform: translateY(-50%);
}

.name {
    text-transform: uppercase;
    font-size: 44px;
    position: absolute;
    top: 70%;
    left: 12%;
    color: #373043;
}

.styles {
    font-size: 36px;
    position: absolute;
    top: 50%;
    transform: translateY(-20px);
    left: 600px;
}

.header-card {
    width: 75%;
    height: 214px;
    background: #DCD6BC;
    border-radius: 102px;
    position: absolute;
    right: 5%;
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
    padding-left: 30%;
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
    right: 5%;
}

.portfolio-header {
    font-size: 200px;
    color: #373043;
    font-weight: 100;
    text-align: left;
    text-transform: uppercase;
}

.portfolio-subheader {
    color: #EA7D41;
    font-size: 90px;
    text-transform: uppercase;
    text-align: right;
    padding-right: 20px;
    font-weight: 100;
}

.portfolio_studio {
    position: relative;
}

.portfolio_studio img {
    width: 100%;
}

.carousel-full {
    position: absolute;
    top: 75%;
    width: 100%;
    background: none;
}

.carousel {
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

.inactive-arrow {
    visibility: hidden;
}
</style>
