const rotator = document.querySelector('.rotator');
const rotators = rotator.children;
let index = 1;
let delay = 1000;

let timer = setTimeout(function run() {
    if (index === rotators.length) index = 0;
    delay = rotators[index].dataset.speed;
    rotation();
    timer = setTimeout(run, delay);
}, delay);

function rotation() {
    
    if (index === rotators.length) index = 0;

    if (index === 0) {
        if (rotator.lastElementChild.classList.contains('rotator__case_active')) rotator.lastElementChild.classList.toggle('rotator__case_active');
    } else {
        rotators[index - 1].classList.toggle('rotator__case_active');    
    }

    rotators[index].classList.toggle('rotator__case_active');
    rotators[index].style.color = rotators[index].dataset.color

    index++;

}