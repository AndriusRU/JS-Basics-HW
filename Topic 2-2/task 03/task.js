const arrSliders = Array.from(document.querySelectorAll('.slider__item'));
const arrSliderDots = Array.from(document.querySelectorAll('.slider__dot'));
const prevSlider = document.querySelector('.slider__arrow_prev');
const nextSlider = document.querySelector('.slider__arrow_next');
let curSlider = 0;

function getActiveSlide() {
    
    for (let i = 0; i < arrSliders.length; i++) {
        if (arrSliders[i].classList.contains('slider__item_active')) {
            curSlider = i;
            break;
        }
    }
    return curSlider;
}

prevSlider.onclick = () => {
    arrSliders[curSlider].classList.remove('slider__item_active');
    arrSliderDots[curSlider].classList.remove('slider__dot_active');
    if (curSlider === 0) {
        arrSliders[arrSliders.length - 1].classList.add('slider__item_active');
        arrSliderDots[arrSliderDots.length - 1].classList.add('slider__dot_active');
    } else {
        arrSliders[curSlider - 1].classList.add('slider__item_active');
        arrSliderDots[curSlider - 1].classList.add('slider__dot_active');
    }
    getActiveSlide();
}

nextSlider.onclick = () => {
    arrSliders[curSlider].classList.remove('slider__item_active');
    arrSliderDots[curSlider].classList.remove('slider__dot_active');

    if (curSlider === arrSliders.length - 1) {
        arrSliders[0].classList.add('slider__item_active');
        arrSliderDots[0].classList.add('slider__dot_active');
    } else {
        arrSliders[curSlider + 1].classList.add('slider__item_active');
        arrSliderDots[curSlider + 1].classList.add('slider__dot_active');
    }
    getActiveSlide();
}

arrSliderDots.forEach((item, index) => {
    item.onclick = () => {
        arrSliders[curSlider].classList.remove('slider__item_active');
        arrSliderDots[curSlider].classList.remove('slider__dot_active');
        arrSliders[index].classList.add('slider__item_active');
        arrSliderDots[index].classList.add('slider__dot_active');
        getActiveSlide();
    }
})

arrSliderDots[curSlider].classList.add('slider__dot_active');


