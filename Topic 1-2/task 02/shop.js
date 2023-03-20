const catalog = [
    {
        id: 1,
        name: 'Рубашка для мужчин',
        description: 'Хлопковая рубашка для мужчин',
        sizes: [48, 50, 52, 54],
        price: 100,
        available: true,
    },
    {
        id: 2,
        name: 'Шорты женские',
        description: 'Летние пляжные шорты',
        sizes: [40, 42, 44, 46],
        price: 150,
        available: true,
    },
    {
        id: 3,
        name: 'Трико мужское с ворсом',
        description: 'Утепленное трико для весна-осень',
        sizes: [56, 58],
        price: 200,
        available: false,
    },
    {
        id: 4,
        name: 'Юбка женская х/б',
        description: 'Легкая женская юбка для лета',
        sizes: [42, 44, 46],
        price: 120,
        available: true,
    },
    {
        id: 5,
        name: 'Сланцы универсальные',
        description: 'Сланцы для пляжа',
        sizes: [38, 40, 42, 43, 44, 46],
        price: 80,
        available: false,
    }
];

const basket = [
    {
        good: 2,
        amount: 2,
    },
    {
        good: 5,
        amount: 1,
    }
];

// Очистка корзины
function clearBasket (basketOrder) {
    while (basketOrder.length > 0) {
        basketOrder.pop();        
    }
    return basketOrder;
}

// Добавление позиции в корзину
function addPosition(basketOrder, idGood, count) {
    let flag = false;
    for (let i = 0; i < basketOrder.length; i ++) {
        if (basketOrder[i].good === +idGood) {
            basketOrder[i].amount += +count;
            flag = true;
            break;
        } 
    }

    if (!flag) {
        basketOrder.push({good: idGood, amount: count});
    }
    return basketOrder;

}

// Удаление позиции из корзины
function delPosition(basketOrder, idGood) {
    for (let i = 0; i < basketOrder.length; i ++) {
        if (basketOrder[i].good === +idGood) {
            basketOrder.splice(i, 1);
            break;
        }
    }
    return basketOrder;
}

// Подсчет суммы корзины
function countGoodBasket(basketOrder) {
    let totalAmount = 0;
    let totalSumm = 0;
    // перебор корзины
    for (let i = 0; i < basketOrder.length; i ++) {
        // перебор по каталогу
        for (let j = 0; j < catalog.length; j++) {
            if (catalog[j].id === basketOrder[i].good) {
                totalAmount += basketOrder[i].amount;
                totalSumm += basketOrder[i].amount * catalog[j].price;
                break;
            }
        }
    }
    return {totalAmount: totalAmount, totalSumm: totalSumm}
}

console.log(basket);

//console.log(clearBasket(basket));

//console.log(delPosition(basket, 2));

console.log(addPosition(basket, 3, 4));

console.log(addPosition(basket, 5, 4));

console.log(countGoodBasket(basket));
