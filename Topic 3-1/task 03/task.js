
const bookElement = document.getElementById('book');
const fonts = Array.from(document.querySelectorAll('.font-size'));
const textColors = Array.from(document.querySelectorAll('.book__control_color a'));
const bgColors = Array.from(document.querySelectorAll('.book__control_background a'));

function activeFont(item) {
    let dataSize = item.dataset.size;

    if (!item.classList.contains('font-size_active')) {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        item.classList.toggle('font-size_active');

        for (let i = 0; i < bookElement.classList.length; i++) {
            if ((/book_fs-\w+/).test(bookElement.classList[i])) {
                bookElement.classList.remove(`${bookElement.classList[i]}`);
                break;
            }
        }
        if (dataSize !== undefined) bookElement.classList.add(`book_fs-${dataSize}`);

    }
}

function activeTextColor(item) {
    let dataColor = item.dataset.textColor;

    if(!item.classList.contains('color_active')) {
        let activeColor = document.querySelector('.book__control_color a.color_active')
        activeColor.classList.toggle('color_active');
        item.classList.toggle('color_active');

        for (let i = 0; i < bookElement.classList.length; i++) {
            if ((/book_color-\w+/).test(bookElement.classList[i])) {
                bookElement.classList.remove(`${bookElement.classList[i]}`);
                break;
            }
        }
        bookElement.classList.add(`book_color-${dataColor}`);
    }
}

function activeBGColor(item) {
    let dataColor = item.dataset.bgColor;

    if(!item.classList.contains('color_active')) {
        let activeColor = document.querySelector('.book__control_background a.color_active')
        activeColor.classList.toggle('color_active');
        item.classList.toggle('color_active');

        for (let i = 0; i < bookElement.classList.length; i++) {
            if ((/book_bg-\w+/).test(bookElement.classList[i])) {
                bookElement.classList.remove(`${bookElement.classList[i]}`);
                break;
            }
        }
        bookElement.classList.add(`book_bg-${dataColor}`);
    }
}

fonts.forEach((item) => {
    item.addEventListener('click', 
        (event) => {
            event.preventDefault();
            activeFont(item);
            
    })
})

textColors.forEach((item) => {
    item.addEventListener('click', 
        (event) => {
            event.preventDefault();
            activeTextColor(item);
            
    })
})

bgColors.forEach((item) => {
    item.addEventListener('click', 
        (event) => {
            event.preventDefault();
            activeBGColor(item);
            
    })
})
