const arrSliders = Array.from(document.querySelectorAll('.slider__item'));
const arrSliderDots = Array.from(document.querySelectorAll('.slider__dot'));
const prevSlider = document.querySelector('.slider__arrow_prev');
const nextSlider = document.querySelector('.slider__arrow_next');
let currentSlider = 0;

function setActiveSlide(index) {
    let indexSlider = index;
    currentSlider = arrSliders.findIndex(slider => slider.classList.contains('slider__item_active'))
    arrSliders[currentSlider].classList.remove('slider__item_active');
    arrSliderDots[currentSlider].classList.remove('slider__dot_active');
    
    if (index < 0) indexSlider = arrSliders.length - 1;
    if (index > arrSliders.length - 1) indexSlider = 0;

    arrSliders[indexSlider].classList.add('slider__item_active');
    arrSliderDots[indexSlider].classList.add('slider__dot_active');
}

prevSlider.onclick = () => {
    let index = arrSliders.findIndex(slider => slider.classList.contains('slider__item_active'));
    setActiveSlide(index - 1);
}

nextSlider.onclick = () => {
    let index = arrSliders.findIndex(slider => slider.classList.contains('slider__item_active'));
    setActiveSlide(index + 1);
}

arrSliderDots.forEach((item, index) => {
    item.onclick = () => {
        setActiveSlide(index);
    }
})

arrSliderDots[currentSlider].classList.add('slider__dot_active');


