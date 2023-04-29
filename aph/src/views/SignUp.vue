<template>
    <div class="signup-bg-container"><div class="signup-bg-blur"></div></div>
    <div class="signup-page">
        <NavMenu />
        <div class="signup-content">
            <div class="signup-choose-btns">
                <div class="signup-choose-btn signup-choose-style" @click="chooseOption = 'styles'">Выбрать стиль съемки</div>
                <div class="signup-choose-btn signup-choose-ph" @click="chooseOption = 'photographers'">Выбрать фотографа</div>
                <div class="signup-choose-btn signup-choose-date" @click="chooseOption = 'date'">Выбрать дату</div>
                <div class="signup-confirm-btn">Записаться на фотосессию</div>
            </div>
            <div class="signup-options">
                <div v-if="chooseOption == 'styles'" class="signup-styles-options">
                    <div class="signup-option">Семейная</div>
                    <div class="signup-option">Студийная</div>
                    <div class="signup-option">Street-style</div>
                    <div class="signup-option">Love-story</div>
                </div>
                <div v-if="chooseOption == 'photographers'" class="signup-photographers-options">
                    <div class="signup-option">Алена</div>
                    <div class="signup-option">Матвей</div>
                    <div class="signup-option">Екатерина</div>
                    <div class="signup-option">Елизавета</div>
                    <div class="signup-option">Анастасия</div>
                </div>
                <div v-if="chooseOption == 'date'" class="signup-date-options">
                    <div class="signup-option">07.05</div>
                    <div class="signup-option">16.05</div>
                </div>
            </div>
        </div>
        
        <div class="signup-footer">
            <div class="signup-question-form">
                <QuestionForm />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'signup',
  }
</script>

<script setup>
import Footer from '@/components/Footer.vue'
import NavMenu from '@/components/NavMenuWhite.vue'
import QuestionForm from '@/components/QuestionForm.vue'
import { ref } from 'vue'

let chooseOption = ref('')


</script>

<style>
.signup-bg-container {
    background: url(@/assets/photos/alena/love-img-1520.webp) center/cover no-repeat;
    width: 100%;
    height: calc(1301px + 15vh);
    position: absolute;
    top: 0;
    left: 0;
}

.signup-bg-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(1301px + 15vh);
    backdrop-filter: blur(15px);
}

.signup-page {
    width: 100%;
    height: calc(1301px + 15vh);
    position: relative;
}

.signup-content {
    width: calc(388px + 388px + 30px);
    margin: auto;
    margin-top: 15vh;
    display: flex;
    justify-content: space-between;
    z-index: 2;
    height: auto;
    height: 450px;
    position: relative;
}

.signup-choose-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: 388px;
}

.signup-choose-btn {
    background: #DCD6BC;
    border-radius: 100px;
    font-size: 25px;
    line-height: 25px;
    height: 74px;
    color: #373043;
    margin-bottom: 16px;
    max-width: 388px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 70px;
    transition: 0.3s;
}

.signup-choose-btn:nth-child(2) {
    padding: 0 60px;
}

.signup-choose-btn:hover {
    color: #EA7D41;
    cursor: pointer;
}

.signup-confirm-btn {
    background: #EA7D41;
    border-radius: 100px;
    font-size: 25px;
    line-height: 25px;
    height: 74px;
    color: #373043;
    max-width: 388px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    transition: 0.3s;
}

.signup-confirm-btn:hover {
    cursor: pointer;
    color: #DCD6BC;
}

.signup-option {
    width: 388px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 25px;
    background: rgba(220, 214, 188, 0.17);
    border-radius: 102px;
    margin-bottom: 16px;
}

.signup-question-form {
    position: relative;
    height: 250px;
    margin: 100px auto;
}

.signup-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
}

.signup-footer footer {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
}
</style>