let numberToGuess = Math.floor(Math.random() * 1000);
console.log('Я загадал - ', numberToGuess);

let countAttempt = prompt('Введите число попыток');
console.log('Число попыток - ', countAttempt);

let attempt = 0;

while (true) {
    let numberFromUser = prompt('Введите число от 0 до 999 или "q" для выхода');
    console.log('Пользователь ввел - ', +numberFromUser);
    
    if (numberFromUser === 'q') {
        alert('До свидания');
        break;
    }
    if (isNaN(numberFromUser) || (+numberFromUser < 0 || +numberFromUser >= 1000)) {
        alert('Вы не ввели число из диапазона от 0 до 999');
    } else if (numberFromUser < numberToGuess) {
        alert('Загаданное число БОЛЬШЕ вашего.');
        attempt++;
    } else if (numberFromUser > numberToGuess) {
        alert('Загаданное число МЕНЬШЕ вашего.');
        attempt++;
    } else if (+numberFromUser === numberToGuess) {
        attempt++
        alert(`Вы угадали !!! Использовали ${attempt} попыток`);
        break;
    }

    console.log('Попытка - ', attempt);
    if (attempt >= countAttempt) {
        alert(`Вы не угадали загаданное число ${numberToGuess} за ${countAttempt} попытки`);
        break;
    }
}
