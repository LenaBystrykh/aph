<template>
  <div class="main-page">
    <NavMenu />
    <div class="main-section main-section-first">
      <h1 class="main-header">Чтобы устроить фотосессию, нужно<br>просто захотеть</h1>
      <div class="main-btns">
        <router-link :to="{name: 'signup'}"><button class="main-signup btn">Записаться на фотосессию</button></router-link>
        <a href="#main-photographers-list"><button class="btn main-choose-ph">Выбрать фотографа</button></a>
      </div>
    </div>
    <div class="main-section main-content-section">
      <div class="main-section-description desc-first">
        <h2 class="main-section-title light">Love-story</h2>
        <p class="main-section-text light">Это память о прекрасном жизненном периоде и романтических<br>моментах, связанных с вашей второй половинкой</p>
        <a href="#main-photographers-list"><button class="main-section-btn light-btn">Выбрать фотографа</button></a>
      </div>
      <img class="main-img z-2" src="@/assets/photos/main/img-1648.webp">
    </div>
    <div class="main-section main-content-section sec-3">
      <div class="main-section-description">
        <h2 class="main-section-title dark">Студийная<br>съемка</h2>
        <p class="main-section-text dark">Возможность реализовать любые творческие<br>идеи и использовать возможности студии</p>
        <a href="#main-photographers-list"><button class="main-section-btn dark-btn">Выбрать фотографа</button></a>
      </div>
      <img class="main-img z-3" src="@/assets/photos/main/img-8274.webp">
    </div>
    <div class="main-section main-content-section sec-4">
      <div class="main-section-description desc-last">
        <h2 class="main-section-title orange">Street-style<br>съемка</h2>
        <p class="main-section-text orange">Возможность реализовать любые творческие<br>идеи и использовать красоту города </p>
        <a href="#main-photographers-list"><button class="main-section-btn orange-btn">Выбрать фотографа</button></a>
      </div>
      <img class="main-img z-4" src="@/assets/photos/main/img-1974.webp">
    </div>
    <div class="main-photographers-section" @click="photographer = ''" id="main-photographers-list">
      <h2 class="main-photographers-title orange">Наши фотографы</h2>
      <div class="main-photographers">
        <router-link :to="{name: 'alena'}" class="main-photographer" @mouseover="photographer = 'alena'">
          <div>
            <img class="main-photographer-img main-alena" :class="[photographer != 'alena' && photographer != '' ? 'hidden-img' : 'visible-img']" src="@/assets/photos/a.png">
            <p>Алена</p>
          </div>
        </router-link>
        
        <router-link :to="{name: 'matvey'}" class="main-photographer" @mouseover="photographer = 'matvey'">
          <div>
            <img class="main-photographer-img main-matvey" :class="[photographer != 'matvey' && photographer != '' ? 'hidden-img' : 'visible-img']" src="@/assets/photos/m.png">
            <p>Матвей</p>
          </div>
        </router-link>
        
        <router-link :to="{name: 'katya'}" class="main-photographer" @mouseover="photographer = 'liza'">
          <div>
            <img class="main-photographer-img main-liza" :class="[photographer != 'liza' && photographer != '' ? 'hidden-img' : 'visible-img']" src="@/assets/photos/e.png">
            <p>Елизавета</p>
          </div>
        </router-link>
        
        <router-link :to="{name: 'katya'}" class="main-photographer" @mouseover="photographer = 'katya'">
          <div>
            <img class="main-photographer-img main-katya" :class="[photographer != 'katya' && photographer != '' ? 'hidden-img' : 'visible-img']" src="@/assets/photos/k.png">
            <p>Екатерина</p>
          </div>
        </router-link>
      </div>
    </div>
    <Transition>
      <div class="main-photoshoot-info" v-if="photographer == ''">
        <h2 class="main-photographers-title orange">Фотосессии с нами</h2>
        <h3 class="main-photoshoot-subtitle orange">Приобретая одну фотосессию, вы получаете:</h3>
        <div class="main-advantages">
          <div class="main-advantage">
            <h3>// личную консультацию с фотографом</h3>
            <p>на которой вы расскажете друг другу<br>об идеях и своих ожиданиях</p>
          </div>
          <div class="main-advantage">
            <h3>// мудборд</h3>
            <p>который составит для вас фотограф, чтобы убедиться<br>в едином видении характера съемки</p>
          </div>
          <div class="main-advantage">
            <h3>// презентацию</h3>
            <p>которую составит для вас фотограф, чтобы убедиться<br>в едином видении характера съемки</p>
          </div>
          <div class="main-advantage">
            <h3>// индивидуальный плейлист</h3>
            <p>который во время съемки поможет еще лучше прочувствовать атмосферу<br>и погрузиться в неё</p>
          </div>
          <div class="main-advantage">
            <h3>// комфортную фотосессию</h3>
            <p>на которой фотограф будет вашим другом и помощником,<br>а вы будете чувствовать себя легко и свободно</p>
          </div>
          <div class="main-advantage">
            <h3>// приятные ощущения</h3>
            <p>вдохновение, которое обычно испытывают наши клиенты<br>во время съемки и после её окончания</p>
          </div>
          <div class="main-advantage">
            <h3 class="main-advantage-orange">// живые фотографии, где вы будете<br>настоящими</h3>
          </div>
          <div class="main-advantage">
            <h3>// желание однажды повторить<br>съемку с APH снова</h3>
          </div>
        </div>
      </div>
    </Transition>
    
    <Transition>
      <AlenaTiles v-if="photographer == 'alena'" @click="photographer = ''" />
    </Transition>
    <Transition>
      <MatveyTiles v-if="photographer == 'matvey'" @click="photographer = ''" />
    </Transition>
    <Transition>
      <LizaTiles v-if="photographer == 'liza'" @click="photographer = ''" />
    </Transition>
    <Transition>
      <KatyaTiles v-if="photographer == 'katya'" @click="photographer = ''" />
    </Transition>

    <div class="main-footer">
        <ContactUs />
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<script setup>
import NavMenu from '@/components/NavMenuWhite.vue'
import ContactUs from '@/components/ContactUs.vue'
import Footer from '@/components/Footer.vue'
import KatyaTiles from '@/components/KatyaTiles.vue'
import AlenaTiles from '@/components/AlenaTiles.vue'
import MatveyTiles from '@/components/MatveyTiles.vue'
import LizaTiles from '@/components/LizaTiles.vue'

import { ref } from 'vue'

let photographer = ref('')
</script>

<style>

.main-page {
  background: #373043;
}

.main-section {
  width: 100%;
  height: 100vh;
  position: relative;
}

.main-section-first {
  height: calc(100vh - 121px);
}

.main-header {
  font-size: 70px;
  color: #EA7D41;
  font-weight: 400;
  text-align: left;
  padding-left: 8%;
  position: absolute;
  bottom: 40vh;
}

.main-btns {
  display: flex;
  bottom: 20vh;
  padding-left: 8%;
  position: absolute;
  width: 92%;
  height: 74px;
}

.main-signup {
  width: 390px;
  margin-right: 14px;
}

.main-choose-ph {
  width: 390px;
  border: 2px solid #EA7D41;
  background: #373043;
  color: #DCD6BC;
  transition: 0.3s;
}

.main-choose-ph:hover {
  background: #EA7D41;
  cursor: pointer;
}

.main-content-section {
  height: calc(100vh + 100px);
  position: relative;
}

.sec-4 {
  overflow: hidden;
  height: 100vh;
  border-radius: 100px;
  margin-top: -200px;
}

.main-img {
  object-fit: cover;
  width: 100%;
  height: 150%;    
  border-radius: 100px;
}

.z-2 {
  z-index: 2;
  object-position: center -700px;
}

.z-3 {
  z-index: 3;
  margin-top: -100px;
  object-position: center -680px;
}

.z-4 {
  z-index: 4;
  height: 100vh;
  object-position: center -50px;
  width: 110%;
}

.main-section-description {
  position: absolute;
  background: none;
  top: 60px;
  right: 10%;
  text-align: right;
}

.desc-first {
  margin-top: 100px;
}

.main-section-title {
  font-size: 70px;
  width: 500px;
  word-wrap: break-word;
  background: none;
  font-weight: 400;
  text-align: right;
  width: 100%;
  margin-bottom: 24px;
  line-height: 70px;
}

.main-section-text {
  background: none;
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  margin-bottom: 44px;
}

.main-section-btn {
  width: 390px;
  border-radius: 102px;
  height: 74px;
  font-size: 24px;
  border: none;
  font-family: "OptimaCyr";
  font-weight: 400;
  transition: 0.3s;
}

.main-section-btn:hover {
  cursor: pointer;
}

.light-btn {
  background: #DCD6BC;
  color: #373043;
}

.dark-btn {
  background: #373043;
  color: #DCD6BC;
}

.light-btn:hover, .dark-btn:hover {
  color: #EA7D41;
}

.orange-btn {
  background: #EA7D41;
  color: #373043;
}

.orange-btn:hover {
  color: #DCD6BC;
}

.main-photographers-title {
  font-size: 70px;
  font-weight: 400;
  text-align: left;
  padding-left: 8%;
  padding-top: 100px;
}

.main-photographers {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  margin-top: 60px;
}

.main-photographer {
  height: 400px;
  position: relative;
  width: 23.5%;
}

.main-photographer img {
  position: absolute;  
  background: none;
}

.main-photographer-img {
  transition: 0.5s;
}

.main-photographer p {  
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  font-size: 50px;
  color: #DCD6BC;
}

.main-alena {
  height: 380px;
  left: -80px;
  top: -42px;
}

.main-matvey {
  height: 290px;
  left: -10px;
  top: -7px;
}

.main-liza {
  height: 310px;
  left: -50px;
  top: -30px;
}

.main-katya {
  height: 400px;
  left: 40px;
  top: -4px;
}

.main-tiles {
  width: 80%;
  margin: 40px auto 100px;
}

.tiles-item {
  border-radius: 5px;
}

.main-photoshoot-subtitle {
  font-size: 40px;
  font-weight: 400;
  padding: 100px 0 60px 8%;
  text-align: left;
}

.main-advantages {
  display: flex;
  width: 84%;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;
}

.main-advantage {
  width: 46%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 60px;
}

.main-advantage h3 {
  font-size: 40px;
  color: #DCD6BC;
  font-weight: 400;
  text-align: left;
}

.main-advantage-orange {
  color: #EA7D41 !important;
}

.main-advantage p {
  font-size: 20px;
  color: #DCD6BC;
  font-weight: 400;
  text-align: left;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.hidden-img {
  opacity: 0.3;
}

.visible-img {
  opacity: 1;
}
</style>
