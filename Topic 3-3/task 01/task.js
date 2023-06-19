const listHint = document.querySelectorAll('.has-tooltip')

Array.from(listHint).forEach((item, index) => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const hint = document.querySelector('.tooltip_active')
        if (hint) {
            console.log(hint)
            if (hint.textContent !== item.getAttribute('title')) {
                hint.remove();
                
                let textHTML = `<div class="tooltip">${item.getAttribute('title')}</div>`;
        
                listHint[index].insertAdjacentHTML('afterEnd',textHTML);
                document.querySelector('.tooltip').classList.toggle('tooltip_active');
                document.querySelector('.tooltip').dataset.position = "right";
            } else {
                hint.remove();
            }
            
        } else {
            let textHTML = `<div class="tooltip" data-position="bottom">${item.getAttribute('title')}</div>`;
        
            listHint[index].insertAdjacentHTML('afterEnd',textHTML);
            document.querySelector('.tooltip').classList.toggle('tooltip_active');
            document.querySelector('.tooltip').dataset.position = "right";
        }
    })
})