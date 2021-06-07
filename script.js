const buttonTaskCreated = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');

function clearInputText() {
  txtInput.value = '';
}

function createTask(task, classOfTask) {
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = classOfTask;
  tasksList.appendChild(listItem);
  clearInputText(); // call the function to clear the input
}

function createTaskBtn() {
  const task = txtInput.value;
  const classOfTask = 'tarefa';
  createTask(task, classOfTask);
}

buttonTaskCreated.addEventListener('click', createTaskBtn);
