const editor = document.getElementById('editor');
const clearText = document.querySelector('.text__clear');

editor.addEventListener('keyup', () => {
    localStorage.setItem('textArea', editor.value);
})

document.addEventListener('DOMContentLoaded', () => {
    editor.value = localStorage.getItem('textArea');
})

clearText.addEventListener('click', () => {
    localStorage.removeItem('textArea');
    editor.value = '';
})