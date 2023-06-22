const modalClose = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const item = pairs.find(elem => elem.startsWith(name + '='));
    if (item) {
        return item.substr(name.length + 1);
    } else {
        return null;
    }
    
}

modalClose.addEventListener('click', () => {
    modal.classList.toggle('modal_active');
    setCookie('subscribe', 'true');
})

document.addEventListener('DOMContentLoaded', () => {
    if (!getCookie('subscribe')) {
        modal.classList.toggle('modal_active');
    }
})
