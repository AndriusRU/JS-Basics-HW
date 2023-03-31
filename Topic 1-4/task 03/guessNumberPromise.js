const fs = require("fs");
const rl = require('readline').createInterface(process.stdin, process.stdout);
const fileName = 'log.txt';

let numberToGuess = Math.floor(Math.random() * 100);
// console.log(`Я загадал ${numberToGuess}`);
console.log(`Я загадал число от 0 до 100. Попробуй отгадай :)`);
let countAttempt = 1;

addToFile(fileName, `Загаданное число ${numberToGuess}.\n`);

function addToFile (fileName, data) {
    fs.appendFile(fileName, data, 'utf8', function (error) {
        if (error) throw error;
    })
}

function question(quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) => {
            resolve(data);
        })
    })
}

async function input() {
    while (true) {
        const data = await question(`Попытка ${countAttempt}. Введите число или q (для выхода): `);
        if (data === 'q') {
            rl.close();
            return
        } else if (+data === numberToGuess) {
            console.log('Вы угадали!');
            console.log(`Было затрачено ${countAttempt} попыток.`);
            addToFile(fileName, `Попытка ${countAttempt}, введенное число - ${+data}, Ответ - УГАДАЛИ!!!.\n`);
            addToFile(fileName, `Число угадано за ${countAttempt} попыток.`);
            rl.close();
            return
        } else if (+data > numberToGuess) {
            console.log('Загаданное число МЕНЬШЕ введенного');
            addToFile(fileName, `Попытка ${countAttempt}, введенное число - ${+data}, Ответ - МЕНЬШЕ.\n`);
            countAttempt++;
        } else if (+data < numberToGuess) {
            console.log('Загаданное число БОЛЬШЕ введенного');
            addToFile(fileName, `Попытка ${countAttempt}, введенное число - ${+data}, Ответ - БОЛЬШЕ.\n`);
            countAttempt++;
        }
    }
}

input();
