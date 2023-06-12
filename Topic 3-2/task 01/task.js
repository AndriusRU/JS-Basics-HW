const chat_widget = document.querySelector(".chat-widget");
const chat_input = document.getElementById("chat-widget__input");
const chat_messages = document.querySelector(".chat-widget__messages");
const chat_messages_container = document.querySelector(".chat-widget__messages-container");
let timer, curSeconds = 0;

const arrAnswerRobot = [
    "Я могу вам помочь?",
    "Добрый день. Чем могу помочь?",
    "К сожалению, все операторы заняты. Попробуйте позже.",
    "Какой раздел каталога вас интересует?",
    "Товара нет в наличии, выберите другой",
    "Купить можно только в кредит",
    "Доставка нужна?",
    "У вас 14 дней на проверку работоспособности",
    "У вас есть еще вопросы?",
    "Спасибо за сотрудничество."
]

function getCurrentTime() {
    let currentTime = new Date();
    
    if (currentTime.getHours() < 10) return `0${currentTime.getHours()}:${currentTime.getMinutes()}`
    else return `${currentTime.getHours()}:${currentTime.getMinutes()}`
}

function startTimer() {
    if (curSeconds === 30) {
        //if (!chat_widget.classList.contains('chat-widget_active')) chat_widget.classList.add('chat-widget_active');
        let timeMessage = getCurrentTime();
        let messageText = "";
        messageText = `
                <div class="message">
                    <div class="message__time">${timeMessage}</div>
                    <div class="message__text">
                        ${arrAnswerRobot[0]}
                    </div>
                </div>
        `
        chat_messages.innerHTML += messageText;
        chat_messages_container.scrollTo(0, chat_messages_container.scrollHeight);
        curSeconds = 0;
    }
    curSeconds++;
    console.log(curSeconds);
}

function resetTimer() {
    clearInterval(timer);
    curSeconds = 0;
    timer = setInterval(startTimer, 1000)
}

chat_widget.addEventListener('click', () => {
    if (!chat_widget.classList.contains('chat-widget_active')) chat_widget.classList.add('chat-widget_active');
});

chat_input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        
        if (chat_input.value.trim()) {
            let timeMessage = getCurrentTime();
            let messageText = "";

            messageText = `
                <div class="message message_client">
                    <div class="message__time">${timeMessage}</div>
                    <div class="message__text">
                        ${chat_input.value}
                    </div>
                </div>
            `;

            chat_messages.innerHTML += messageText;

            let answerNumber = Math.floor(Math.random() * 10);
            timeMessage = getCurrentTime();
            messageText = `
                <div class="message">
                    <div class="message__time">${timeMessage}</div>
                    <div class="message__text">
                        ${arrAnswerRobot[answerNumber]}
                    </div>
                </div>
            `
            chat_messages.innerHTML += messageText;
            chat_messages_container.scrollTo(0, chat_messages_container.scrollHeight);
            chat_input.value = "";
        }
    }
})

// события сброса таймера
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeyup = resetTimer;

