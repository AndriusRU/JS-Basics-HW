const blocks = Array.from(document.querySelectorAll('div'));

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }

    return true;
}

window.addEventListener('scroll', (event) => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    elements.forEach((elem) => {
        if (isVisible(elem)) elem.classList.add('reveal_active')
        else elem.classList.remove('reveal_active');
    })
})



setInterval(() => {
    //console.log(isVisible(blocks));
}, 1000);