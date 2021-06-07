let taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');

function listMaker() {
  let taskInput = document.getElementById('texto-tarefa').value;
  let listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerText = taskInput;
  taskList.appendChild(listItem);
}

taskButton.addEventListener('click', listMaker);
