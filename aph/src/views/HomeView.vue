<template>
  <NavMenu />
  <div class="main-section main-section-first">
    <h1 class="main-header">Чтобы устроить фотосессию, нужно<br>просто захотеть</h1>
    <div class="main-btns">
      <button class="main-signup btn">Записаться на фотосессию</button>
      <button class="btn main-choose-ph">Выбрать фотографа</button>
    </div>
  </div>
  <div class="main-section main-content-section">
    <div class="main-section-description desc-first">
      <h2 class="main-section-title light">Love-story</h2>
      <p class="main-section-text light">Это память о прекрасном жизненном периоде и романтических<br>моментах, связанных с вашей второй половинкой</p>
      <button class="main-section-btn light-btn">Выбрать фотографа</button>
    </div>
    <img class="main-img z-2" src="@/assets/photos/main/img-1648.webp">
  </div>
  <div class="main-section main-content-section sec-3">
    <div class="main-section-description">
      <h2 class="main-section-title dark">Студийная<br>съемка</h2>
      <p class="main-section-text dark">Возможность реализовать любые творческие<br>идеи и использовать возможности студии</p>
      <button class="main-section-btn dark-btn">Выбрать фотографа</button>
    </div>
    <img class="main-img z-3" src="@/assets/photos/main/img-8274.webp">
  </div>
  <div class="main-section main-content-section sec-4">
    <div class="main-section-description desc-last">
      <h2 class="main-section-title orange">Street-style<br>съемка</h2>
      <p class="main-section-text orange">Возможность реализовать любые творческие<br>идеи и использовать красоту города </p>
      <button class="main-section-btn orange-btn">Выбрать фотографа</button>
    </div>
    <img class="main-img z-4" src="@/assets/photos/main/img-1974.webp">
  </div>
  <div class="main-footer">
      <ContactUs />
      <Footer></Footer>
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
</script>

<style>
.main-section {
  width: 100%;
  height: 100vh;
  background: #373043;
  position: relative;
}

.main-section-first {
  height: calc(100vh - 121px);
}

.main-header {
  font-size: 70px;
  color: #EA7D41;
  background: #373043;
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
  background: #373043;
  position: absolute;
  width: 92%;
  height: 74px;
}

.main-signup {
  width: 390px;
  margin-right: 14px;
}

.main-choose-ph {
  background: #373043;
  width: 390px;
  border: 2px solid #EA7D41;
  color: #DCD6BC;
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
}

.light-btn {
  background: #DCD6BC;
  color: #373043;
}

.dark-btn {
  background: #373043;
  color: #DCD6BC;
}

.orange-btn {
  background: #EA7D41;
  color: #373043;
}

/* .main-footer {
  margin-top: -200px;
  /* ПОСЛЕ ДОБАВЛЕНИЯ ПЛИТКИ УБРАТЬ */
</style>
