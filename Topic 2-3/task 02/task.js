class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.timer;

        this.reset();

        this.registerEvents();
    }
  
    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }
  
    registerEvents() {
      /*
        TODO:
        Написать обработчик события, который откликается
        на каждый введённый символ.
        В случае правильного ввода слова вызываем this.success()
        При неправильном вводе символа - this.fail();
        DOM-элемент текущего символа находится в свойстве this.currentSymbol.
       */

        document.addEventListener('keyup', 
            (event) => {
                if (event.key == this.currentSymbol.textContent) this.success()
                else this.fail();
        });

    }
    
    countDown() {
        this.timer = setInterval(() => {
            let time = document.getElementById('time');
            let timeleft = Number(time.textContent) - 1;
            time.textContent = timeleft;
            if (timeleft === 0) {
                this.fail();
            }
        }, 1000);
    }

    getTime() {
        return Number(document.getElementById('time').textContent);
    }

    success() {
        if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;

        if (this.currentSymbol !== null) {
            this.currentSymbol.classList.add('symbol_current');
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }
  
    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }
  
    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
        const time = document.getElementById('time');
        time.textContent = this.getLength(word);

        document.addEventListener('DOMContentLoaded', () => {
            this.countDown();
        });

    }
  
    getWord() {
        const words = [
            'bob',
            'awesome',
            'netology',
            'hello',
            'kitty',
            'rock',
            'youtube',
            'popcorn',
            'cinema',
            'love',
            'javascript'
        ],
        index = Math.floor(Math.random() * words.length);
  
        return words[index];
    }

    getLength(word) {
        return word.length;
    }


  
    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;
  
        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
  }
  
  new Game(document.getElementById('game'))