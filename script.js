let buttonTaskCreated = document.querySelector('#criar-tarefa');
let textInputTask = document.querySelector('#texto-tarefa');
let tasksList = document.querySelector('#lista-tarefas');

function createTaskBtn() {
    let task = textInputTask.value;
    let classOfTask = 'tarefa';
    createTask(task, classOfTask);
}

function createTask(task, classOfTask) {
    let listItem = document.createElement('li');
    listItem.innerText = task;
    listItem.className = classOfTask;
    tasksList.appendChild(listItem);
    clearInputText(); // call the function to clear the input
}

function clearInputText() {
    textInputTask.value = '';
}

buttonTaskCreated.addEventListener('click', createTaskBtn);