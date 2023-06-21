const xhr = new XMLHttpRequest();
const pollQuestion = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let pollId;
const xhrPost = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === xhr.DONE) {
        const poll = JSON.parse(xhr.responseText);

        pollQuestion.insertAdjacentText('beforeend', poll.data.title);
        
        for (let item in poll.data.answers) {
            let textHTML = `<button class="poll__answer">${poll.data.answers[item]}</button>`
            pollAnswers.insertAdjacentHTML('beforeend', textHTML);
        }

        pollId = poll.id;
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', false);

xhr.send();

const buttons = Array.from(document.querySelectorAll('.poll__answer'));

buttons.forEach((but, index) => {
    but.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        
        xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhrPost.send(`vote=${pollId}&answer=${index}`);
        
    });
});

xhrPost.addEventListener('readystatechange', () => {
    if (xhrPost.readyState === xhrPost.DONE) {
        pollAnswers.innerHTML = '';
        const stat = JSON.parse(xhrPost.responseText).stat;
        let summary = 0;

        for (let key in stat) {
            summary += stat[key].votes;
        }
        
        for (let key in stat) {
            let value = stat[key].votes / summary;
            const percent = new Intl.NumberFormat("en", {style: "percent", minimumFractionDigits: 2}).format(value)
            let textHTML = `<div>${stat[key].answer}: <b>${percent}</b></div>`
            pollAnswers.insertAdjacentHTML('beforeend', textHTML);
        }
    }
})