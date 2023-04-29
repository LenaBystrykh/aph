<template>
    <div class="contact-us">
        <div class="contact-us-bg-container"></div>
        <div class="contact-us-question-form">
            <QuestionForm />
        </div>
        <div class="contact-us-footer">
            <Footer></Footer>
        </div>

    </div>
</template>

<script setup>
import QuestionForm from './QuestionForm.vue'
import Footer from './Footer.vue';
</script>

<style>
.contact-us {
    width: 100%;
    height: calc(30vh + 530px);
    position: relative;
}

.contact-us-bg-container {
    width: 100%;
    height: calc(30vh + 530px);
    position: absolute;
    top: 0;
    left: 0;
    background: url(@/assets/photos/img-1113.webp);
    background-size: cover;
    background-position: center 0px;
    background-repeat: no-repeat;
    border-radius: 100px;
}

.contact-us-question-form {
    position: relative;
    height: 250px;
    padding: 15vh 0;
}
</style>
