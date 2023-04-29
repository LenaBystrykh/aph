<template>
    <div class="question-form">
        <div class="question-left">
            <p class="question-title">задайте нам<br>вопрос</p>
            <p class="question-text">Уточните условия и этапы проведения вашей<br>съемки или задайте вопрос о сотрудничестве</p>
        </div>
        <div class="question-right">
            <input class="question-input" type="text" placeholder="Ваш вопрос">
            <button class="send-question-btn btn">Отправить</button>
        </div>  
    </div>
</template>

<style>
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

.question-left {
  width: 46%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: none;
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
  width: 54%;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
}

.question-input {
  height: 60px;
  width: 100%;
  background: #373043;
  border: none;
  color: #FFFFFF;
  text-align: left;
  font-size: 18px;
  border-radius: 100px;    
  padding-left: 30px;
  outline: none;
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
  margin-left: -20%;
  transition: 0.3s;
}

.send-question-btn:hover {
    cursor: pointer;
    color: #DCD6BC;
}
</style>