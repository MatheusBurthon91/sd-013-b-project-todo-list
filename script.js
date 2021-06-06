function createTask () {
  let task = document.createElement('li');
  task.innerText = taskToBeCreated.value;
  taskToBeCreated.value = '';
  taskList.appendChild(task);
}

function changeBackgroundColor (event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

let createTaskButton = document.getElementById('criar-tarefa');
let taskToBeCreated = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

// Eventos dos elementos
createTaskButton.addEventListener('click', createTask);
taskList.addEventListener('click', changeBackgroundColor);
