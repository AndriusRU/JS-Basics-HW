const buttonAdd = document.getElementById('tasks__add');
const listTasks = document.getElementById('tasks__list');

function addItem() {
    const listTasks = document.getElementById('tasks__list');
    const inputTask = document.getElementById('task__input');

    let taskHTML = `<div class="task"><div class="task__title">${inputTask.value}</div><a href="#" class="task__remove">&times;</a></div>`;
    listTasks.insertAdjacentHTML('beforeend', taskHTML);
    inputTask.value = '';
}

function deleteItem(event) {
    const task = event.target.closest('.task');
    const list = JSON.parse(localStorage.getItem('list'));

    for (let i = 0; i < list.length; i++) {
        if (list[i] === task.querySelector('.task__title').textContent) {
            list.splice(i, 1);
        }
    }
    
    localStorage.setItem('list', JSON.stringify(list));
    
    if (task) {
        task.remove();
    }
}

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const inputTask = document.getElementById('task__input');
    let list = JSON.parse(localStorage.getItem('list'));

    if (!list) {
        list = [];
    }

    if (inputTask.value.trim() !== "") {
        list.push(inputTask.value);
        localStorage.setItem('list', JSON.stringify(list));
        addItem();
    } else {
        inputTask.value = '';
    }
})

listTasks.addEventListener('click', deleteItem);

document.addEventListener('DOMContentLoaded', () => {
    const listTasks = document.getElementById('tasks__list');
    const list = JSON.parse(localStorage.getItem('list'));

    list.forEach(element => {
        let task = `<div class="task"}><div class="task__title">${element}</div><a href="#" class="task__remove">&times;</a></div>`;
        listTasks.insertAdjacentHTML('beforeend', task);
    });
})

