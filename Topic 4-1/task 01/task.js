const xhr = new XMLHttpRequest();
const list = document.getElementById('items');
const loader = document.getElementById('loader');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const valutes = JSON.parse(xhr.responseText).response.Valute;
        let array = [];

        for (let item in valutes) {
            let textHTML =  `<div class="item"><div class="item__code">${valutes[item].CharCode}</div>
            <div class="item__value">${valutes[item].Value}</div>
            <div class="item__currency"> руб.</div></div>`;
            let val = {
                CharCode: valutes[item].CharCode,
                Value: valutes[item].Value,
            }
            array.push(val);

            list.insertAdjacentHTML('beforeend', textHTML);
        }

        localStorage.setItem('valutes', JSON.stringify(array));

        loader.classList.toggle('loader_active');
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const valutes = JSON.parse(localStorage.getItem('valutes'));

    if (valutes) {
        for (let item in valutes) {
            let textHTML = `<div class="item"><div class="item__code">${valutes[item].CharCode}</div>
            <div class="item__value">${valutes[item].Value}</div>
            <div class="item__currency"> руб.</div></div>`;
            
            list.insertAdjacentHTML('beforeend', textHTML);
        }
    
        loader.classList.toggle('loader_active');
        
    }

})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();
