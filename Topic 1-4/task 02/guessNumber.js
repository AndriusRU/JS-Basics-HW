const fs = require("fs");
const rl = require('readline').createInterface(process.stdin, process.stdout);
const fileName = 'log.txt';

let numberToGuess = Math.floor(Math.random() * 100);
console.log(`Я загадал ${numberToGuess}`);
let countAttempt = 1;

addToFile(fileName, `Загаданное число ${numberToGuess}.\n`);

function addToFile (fileName, data) {
    fs.appendFile(fileName, data, 'utf8', function (error) {
        if (error) throw error;
    })
}

function guessNumber() {
    rl.question(`Попытка ${countAttempt}. Введите число или q (для выхода): `, (cmd) => {
        if (cmd === 'q') {
            rl.close();
            return
        } else if (+cmd === numberToGuess) {
            console.log('Вы угадали!');
            console.log(`Было затрачено ${countAttempt} попыток.`);
            addToFile(fileName, `Попытка ${countAttempt}, введенное число - ${+cmd}, Ответ - УГАДАЛИ!!!.\n`);
            addToFile(fileName, `Число угадано за ${countAttempt} попыток.`);
            rl.close();
            return
        } else if (+cmd > numberToGuess) {
            console.log('Загаданное число МЕНЬШЕ введенного');
            addToFile(fileName, `Попытка ${countAttempt}, введенное число - ${+cmd}, Ответ - МЕНЬШЕ.\n`);
            countAttempt++;
        } else if (+cmd < numberToGuess) {
            console.log('Загаданное число БОЛЬШЕ введенного');
            addToFile(fileName, `Попытка ${countAttempt}, введенное число - ${+cmd}, Ответ - БОЛЬШЕ.\n`);
            countAttempt++;
        }

        guessNumber();
    })
}

guessNumber();