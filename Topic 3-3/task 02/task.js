let iterator = getLastKey() + 1;
const buttonAdd = document.getElementById('tasks__add');
const listTasks = document.getElementById('tasks__list');

function addItem() {
    const listTasks = document.getElementById('tasks__list');
    const inputTask = document.getElementById('task__input');

    let taskHTML = `<div class="task" key="${iterator}"><div class="task__title">${inputTask.value}</div><a href="#" class="task__remove">&times;</a></div>`;
    listTasks.insertAdjacentHTML('beforeend', taskHTML);
    inputTask.value = '';
}

function deleteItem(event) {
    const task = event.target.closest('.task');
    delete localStorage[task.getAttribute('key')]
    if (task) task.remove();

}

function getLastKey() {
    let lastKey = 0
    for (let i = 0; i < localStorage.length; i++) {
        if (Number(localStorage.key(i)) > lastKey) lastKey = Number(localStorage.key(i));
    }
    return lastKey;
}

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const inputTask = document.getElementById('task__input');
    if (inputTask.value !== "") {
        try {
            localStorage[iterator] = inputTask.value
            addItem();
            iterator++;
        } catch (error) {
            if (error == QUOTA_EXCEEDED_ERR) {
                alert("Переполнение localStorage !!!")
            }
        }
    }
})

listTasks.addEventListener('click', deleteItem);

document.addEventListener('DOMContentLoaded', () => {
    const listTasks = document.getElementById('tasks__list');
    for (let i = 0; i < localStorage.length; i++) {
        let task = `<div class="task" key=${localStorage.key(i)}><div class="task__title">${localStorage.getItem(localStorage.key(i))}</div><a href="#" class="task__remove">&times;</a></div>`;
        listTasks.insertAdjacentHTML('beforeend', task);
    }
    getLastKey();
})

