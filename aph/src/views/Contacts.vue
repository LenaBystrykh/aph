<template>
    <div class="contacts-bg-container"><div class="contacts-bg-blur"></div></div>
    <div class="contacts-page">
        <NavMenu />
        <div class="contacts-content">
            <div class="contacts-coop">
                <h2 class="contacts-title coop-title">Если вы фотограф, и хотите сотрудничать<br>с платформой, пишите нам:</h2>
                <div class="contacts-coop-link">info@aph.com</div>
                <div class="contacts-coop-link"><a href="https://t.me/alenka_ishm" target="_blank">t.me/alenka_ishm</a></div>
            </div>
            <div class="contacts-follow">
                <h2 class="contacts-title follow-title">Следуйте за платформой<br>в социальных сетях:</h2>
                <div class="contacts-follow-link contacts-bg-light"><a class="contacts-link contacts-link-dark" href="https://vk.com/aph.alive" target="_blank">// VK</a></div>
                <div class="contacts-follow-link contacts-bg-orange"><a class="contacts-link contacts-link-dark" href="https://instagram.com/aph.alive" target="_blank">// Instagram</a></div>
                <div class="contacts-follow-link contacts-bg-dark"><a class="contacts-link contacts-link-light" href="https://t.me/alivephotosaph" target="_blank">// Telegram</a></div>
            </div>
        </div>
        
        <div class="contacts-footer">
            <div class="contacts-question-form">
                <QuestionForm />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'contacts',
  }
</script>

<script setup>
import Footer from '@/components/Footer.vue'
import NavMenu from '@/components/NavMenuDark.vue'
import QuestionForm from '@/components/QuestionForm.vue'
import { ref } from 'vue'

let chooseOption = ref('')
</script>

<style>
.contacts-bg-container {
    width: 100%;
    height: calc(1566px + 10vh);
    position: absolute;
    top: 0;
    left: 0;
    background: url(@/assets/photos/alena/studio-img-8459.webp);
    background-size: cover;
    background-position: center 0px;
    background-repeat: no-repeat;
}

.contacts-bg-blur {
    backdrop-filter: blur(15px);
    width: 100%;
    height: calc(1566px + 10vh);
    position: absolute;
    top: 0;
    left: 0;
}

.contacts-page {
    width: 100%;
    height: calc(1566px + 10vh);
    position: relative;
}

.contacts-content {
    width: 72%;
    margin: auto;
    margin-top: 10vh;
    z-index: 2;
    height: auto;
    min-height: 350px;
    position: relative;
}

.contacts-coop, .contacts-follow {
    display: flex;
    flex-direction: column;
}

.contacts-coop {
    align-items: flex-end;
}

.contacts-coop-link {
    background: rgba(55, 48, 67, 0.8);
    border-radius: 102px;
    padding: 10px 30px;
    font-size: 50px;
    font-weight: 400;
    margin-top: 16px;
    color: #DCD6BC;
}

.contacts-coop-link a{
    color: #EA7D41;
    text-decoration: none;
}

.contacts-follow {
    align-items: flex-start;
}

.contacts-title {
    font-size: 50px;
    color: #DCD6BC;
    font-weight: 400;
}

.coop-title {
    text-align: right;
}

.follow-title {
    text-align: left;
    margin-bottom: 40px;
}

.contacts-follow-link {
    border-radius: 102px;
    padding: 10px 30px;
    font-size: 50px;
    font-weight: 400;
    margin-top: 16px;
}

.contacts-bg-light {
    background: rgba(220, 214, 188, 0.8);
}

.contacts-bg-orange {
    background: rgba(234, 125, 65, 0.8);
}

.contacts-bg-dark {
    background: rgba(55, 48, 67, 0.8);
}

.contacts-link {
    text-decoration: none;
}

.contacts-link-dark {
    color: #373043;
}

.contacts-link-light {
    color: #DCD6BC;
}

.contacts-question-form {
    position: relative;
    height: 250px;
    margin: 100px auto;
}

.question-form 
{
    margin: auto;
    width: 68%;
    height: 100%;
    background: rgba(220, 214, 188, 0.84);
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    padding-left: 8%;
    padding-right: 8%;
}

.contacts-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
}

.contacts-footer footer {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
}
</style>