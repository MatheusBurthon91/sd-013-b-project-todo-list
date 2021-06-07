const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');

function listMaker() {
  let inputText = taskInput.value;
  let listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerText = inputText;
  taskList.appendChild(listItem);
  taskInput.value = '';
}

taskButton.addEventListener('click', listMaker);
