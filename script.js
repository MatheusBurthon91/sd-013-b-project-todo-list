function createTask (event) {
  let task = document.createElement('li');
  task.innerText = taskToBeCreated.value;
  taskToBeCreated.value = '';
  taskList.appendChild(task);
}

let createTaskButton = document.getElementById('criar-tarefa');
let taskToBeCreated = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

// Eventos dos elementos
createTaskButton.addEventListener('click', createTask);
