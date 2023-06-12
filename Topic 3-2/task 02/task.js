const checkBoxs = Array.from(document.querySelectorAll(".interest__check"));

function countChilds(parent) {
    return parent.querySelectorAll('.interest__check').length;
}

function countCheckChild(parent) {
    return Array.from(parent.querySelectorAll('.interest__check')).filter((item) => item.checked === true).length;
}

checkBoxs.forEach((elem) => {
    elem.addEventListener('change', () => {
        let parent = elem;

        if (elem.closest('.interest') && countChilds(elem.closest('.interest')) > 1) {
            Array.from(elem.closest('.interest').querySelectorAll('.interest__check')).forEach((item) => {item.checked = elem.checked});
        }

        while (!parent.classList.contains('interests_main')) {
            
            if (parent.closest('.interests')) {
                parent = parent.closest('.interests').parentElement;
            } else if (parent.closest('.interest')) {
                parent = parent.closest('.interest').parentElement;
            } else {
                break;
            }
            
            if (parent.classList.contains('interest')) {

                // Выбраны все дочерние чекбоксы, а родитель не отмечен
                if (countChilds(parent) - countCheckChild(parent) === 1 && !parent.querySelector('.interest__check').checked) {
                    parent.querySelector('.interest__check').indeterminate = false;
                    parent.querySelector('.interest__check').checked = true;
                } 
                // выбраны дочерние чекбоксы, но их меньше чем общее количество
                else if (countCheckChild(parent) !== 0 && countCheckChild(parent) < countChilds(parent)) {
                    parent.querySelector('.interest__check').checked = false;
                    parent.querySelector('.interest__check').indeterminate = true;
                } 
                // не выбран ни один дочерний чекбокс
                else if (countCheckChild(parent) === 0) {
                    parent.querySelector('.interest__check').checked = false;
                    parent.querySelector('.interest__check').indeterminate = false;
                }
            }
        }
    })
})