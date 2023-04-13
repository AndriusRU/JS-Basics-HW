const modalWindow = document.getElementById('modal_main');
const arrModalClose = Array.from(document.getElementsByClassName('modal__close'));
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success');

modalWindow.classList.add('modal_active');

arrModalClose.forEach((item) => {
    item.onclick = () => {
        if (item.classList.contains('show-success')) {
            modalWindow.classList.remove('modal_active');
            modalSuccess.classList.add('modal_active');
        } else {
            let modal = item.closest('.modal');
            modal.classList.remove('modal_active');    
        }
    }
})
