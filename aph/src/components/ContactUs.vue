<template>
    <div class="contact-us">
        <div class="contact-img__wrapper">
            <img class="contact-img" src="@/assets/photos/img-1113.webp">
        </div>
        <div class="question-form">
            <div class="question-left">
                <p class="question-title">задайте нам вопрос</p>
                <p class="question-text">Уточните условия и этапы проведения вашей съемки или задайте вопрос о сотрудничестве</p>
            </div>
            <div class="question-right">
                <input class="question-input" type="text" placeholder="Ваш вопрос">
                <button class="send-question-btn btn">Отправить</button>
            </div>  
        </div>
    </div>
</template>

<style>
.contact-us {
    width: 100%;
    height: calc(40vh + 280px);
    position: relative;
}

.contact-img{
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
