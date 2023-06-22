const form = document.getElementById('signin__form');
const sign = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const btnLogout = document.getElementById('logout__btn');

function clearData(form) {
    form.login.value = '';
    form.password.value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const xhr = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';

    xhr.open('POST', url);

    const formData = new FormData(form);
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const resp = xhr.response;

            if (resp.success) {
                sign.classList.toggle('signin_active');
                welcome.querySelector('span').textContent = resp.user_id;
                welcome.classList.toggle('welcome_active');
            } else {
                alert('Неверный логин/пароль');
                clearData(form);
            }
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    clearData(form);
})


btnLogout.addEventListener('click', () => {
    welcome.classList.toggle('welcome_active');
    sign.classList.toggle('signin_active');
    clearData(form);
})
