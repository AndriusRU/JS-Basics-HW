const arrMenuLink = Array.from(document.querySelectorAll('.menu__link'));

arrMenuLink.forEach((item) => {

    item.onclick = () => {
        // let next = item.nextElementSibling;

        // next.classList.add('menu_active');
        if (item.closest('.menu .menu_sub')) {
            return false;
        }

        const activeMenu = Array.from(document.querySelectorAll('.menu_active'));
        activeMenu.forEach((item) => {
            item.classList.remove('menu_active');
        })
        
        if (item.getAttribute("href") === "") {
            let next = item.nextElementSibling;
            next.classList.add('menu_active');
    
            return false;
        }
    }
})