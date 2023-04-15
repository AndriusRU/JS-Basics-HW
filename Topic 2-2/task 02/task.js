const arrMenuLink = Array.from(document.querySelectorAll('.menu__link'));

arrMenuLink.forEach((item) => {

    item.onclick = () => {
        
        let next = item.nextElementSibling;

        if (next) {
            if (next.classList.contains('menu_active')) {
                next.classList.remove('menu_active');    
            } else {
                const activeMenu = Array.from(document.querySelectorAll('.menu_active'));
                activeMenu.forEach((item) => {
                    item.classList.remove('menu_active');
                })
                next.classList.add('menu_active');
            }
            return false;
        }
 
    }
})