const timer = document.getElementById('timer');

const interval = setInterval(() => {
    if (timer.textContent === '0') {
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
    }
    else timer.textContent = Number(timer.textContent) - 1;
}, 1000);



