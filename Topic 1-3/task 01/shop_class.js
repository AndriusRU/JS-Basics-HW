class Good {
    constructor (id, name, description, sizes, price, available = false) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }

    setAvailable (available) {
        this.available = available;
    }
}

class GoodList {
    #goods;
    constructor (goods, priceSort, derectionSort) {
        this.#goods = goods;
        this.filter = /^.*$/gmi;
        this.sortPrice = priceSort;
        this.sortDir = derectionSort;
    }

    get list() {
        const result = this.#goods
                        .filter( elem => elem.name.match(this.filter))
                        .filter( elem => elem.available === true);
        if (this.sortPrice) {
            if (this.sortDir) return result.sort((elem1, elem2) => elem1.price - elem2.price);
            else return result.sort((elem1, elem2) => elem2.price - elem1.price);
        }

        return result;
    }

    add (good) {
        this.#goods.push(good);
    }

    remove (id) {
        const idx = this.#goods.findIndex( elem => elem.id === id)
        if (idx !== -1) this.#goods.splice(idx, 1);
    }
}

class BasketGood extends Good {
    constructor (good, amount) {
        super (good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.amount = amount;
    }
}


class Basket {
    constructor (goods) {
        this.goods = goods;
    }

    add (good, amount) {
        const findIdx = this.goods.findIndex(elem => (elem.id === good.id));
        if (findIdx !== -1) {
            this.goods[findIdx].amount += amount;
        } else {
            if (good.available) this.goods.push(new BasketGood(good, amount));
        }
    }

    remove (good, amount) {
        const findIdx = this.goods.findIndex(elem => elem.id === good.id);
        if (findIdx !== -1) {
            if (this.goods[findIdx].amount === amount) {
                this.goods.splice(findIdx, 1);
            } else if (this.goods[findIdx].amount > amount) {
                this.goods[findIdx].amount -= amount;
            }
        }
        
    }

    clear() {
        this.goods = [];
    }

    removeUnavailable() {
        this.goods = this.goods.filter( elem => elem.available === true);
    }

    get totalAmount() {
        return this.goods.reduce((total, elem) => total + elem.amount, 0);
    }

    get totalSum() {
        return this.goods.reduce((total, elem) => total + elem.price * elem.amount, 0);
    }
}

// Создаем несколько товаров
const good1 = new Good(1, 'Рубашка', 'Хлопчатая рубашка', [48, 50, 52], 100);
const good2 = new Good(2, 'Шорты', 'Джинсовые шорты', [54], 150);
const good3 = new Good(3, 'Платье', 'Вечернее платье', [44, 46, 48], 200);
const good4 = new Good(4, 'Брюки мужские', 'Классические брюки', [50, 52], 180);
const good5 = new Good(5, 'Брюки женские', 'Стильные классические брюки', [44], 170);

// ставим признак доступности некоторым
good1.setAvailable(true);
good2.setAvailable(true);
good3.setAvailable(true);
good4.setAvailable(true);
good5.setAvailable(true);

// создаем массив для передачи в каталог
const arrGoods = [good1, good2, good3, good4, good5];

// создаем еще один товар
const good6 = new Good(6, 'Туфли', 'Женские туфли', [36, 38, 40], 250);

// создаем каталог
const catalog = new GoodList(arrGoods, true, false);

// Добавляем товары в класс BasketGood
const basketGood1 = new BasketGood(good1, 12);
const basketGood2 = new BasketGood(good2, 2);
const basketGood3 = new BasketGood(good3, 4);
const basketGood4 = new BasketGood(good4, 7);
const basketGood5 = new BasketGood(good5, 8);
const basketGood6 = new BasketGood(good6, 4);

// создаем массив для передачи в корзину
const arrBasketGoods = [basketGood1, basketGood2, basketGood3, basketGood4, basketGood5];
// console.log(arrBasketGoods);

// создаем Корзину
const myBasket = new Basket(arrBasketGoods);
console.log(myBasket);


// Добавляем новый товар в каталог
// catalog.add(good6);

// Выводим список с фильтром по умолчанию (все доступные товары)
// console.log(catalog.list);

// Удаляем товар с id
// catalog.remove(4);
// console.log(catalog.list);

// Делаем фильтр и смотрим на список товаров
// catalog.filter = /брюк/gmi;
// console.log(catalog.list);



// Очистка корзины
// myBasket.clear();
// console.log(myBasket);

// Удаление из корзины недоступных товаров
// myBasket.removeUnavailable();
// console.log(myBasket);

// Добавление товара в корзину

// Добавляем существующий товар в корзину
// myBasket.add(good5, 4);
// console.log(myBasket);

// Добавляем недоступный товар в корзину
// myBasket.add(good6, 4);
// console.log(myBasket);

// Добавляем новый доступный товар в корзину
// good6.setAvailable(true);
// myBasket.add(good6, 4);
// console.log(myBasket);


// Удаление товара из корзины

// // Удаляем меньше, чем в корзине
// myBasket.remove(good5, 3);
// console.log(myBasket);

// // Удаляем равное кол-во как в корзине
// myBasket.remove(good5, 8);
// console.log(myBasket);

// // Удаляем больше, чем в корзине
// myBasket.remove(good5, 80);
// console.log(myBasket);


// Общее количество товаров в корзине
// console.log(myBasket.totalAmount);

// Общая сумма заказанных товаров
// console.log(myBasket.totalSum);
