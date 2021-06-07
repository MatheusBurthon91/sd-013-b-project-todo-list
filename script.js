// Requisito 5
const list = document.querySelector('#lista-tarefas');
const addTask = document.querySelector('#criar-tarefa');

function createTask() {
  const addLine = document.createElement('li');
  addLine.innerText = document.querySelector('#texto-tarefa').value;
  list.appendChild(addLine);
  document.getElementById('texto-tarefa').value = '';
}

addTask.addEventListener('click', createTask);
