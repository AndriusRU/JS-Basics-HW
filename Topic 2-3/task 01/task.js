const arrDropMenu = Array.from(document.querySelectorAll('.dropdown'));
const arrMenuItem = Array.from(document.querySelectorAll('.dropdown__item'));

arrDropMenu.forEach((item) => {
    
    item.onclick = () => {
        
        let dropMenu = item.querySelector('.dropdown__list');

        if (dropMenu) {
            if (dropMenu.classList.contains('dropdown__list_active')){
                dropMenu.classList.remove('dropdown__list_active')
            } else {
                const otherActiveElements = Array.from(document.querySelectorAll('.dropdown__list_active'));
                otherActiveElements.forEach((elem) => {
                    elem.classList.remove('dropdown__list_active');
                })
                dropMenu.classList.add('dropdown__list_active');
            }
            return false;
        }
        
    }
})

arrMenuItem.forEach((item) => {
    
    item.onclick = () => {
        item.closest('.dropdown__list').previousElementSibling.textContent = item.textContent.trim();
    }
})