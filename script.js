function createTask () {
  let task = document.createElement('li');
  task.innerText = taskToBeCreated.value;
  taskToBeCreated.value = '';
  taskList.appendChild(task);
}

function changeBackgroundColor(event) {
  const selected = document.getElementsByClassName('selected');
  if (selected.length === 1) {
    selected[0].style.backgroundColor = '';
    selected[0].classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');
}

function eventCompleted(event) {
  const completedEvent = event.target;
  if (completedEvent.style.textDecoration !== 'line-through') {
    completedEvent.style.textDecoration = 'line-through';
    completedEvent.classList.add('completed');
  } else {
    completedEvent.style.textDecoration = '';
    completedEvent.classList.remove('completed');
  }
}

function deleteAllTasks(event) {
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }
}

const createTaskButton = document.getElementById('criar-tarefa');
const deleteAllTasksButton = document.getElementById('apaga-tudo');
let taskToBeCreated = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

// Eventos dos elementos
createTaskButton.addEventListener('click', createTask);
deleteAllTasksButton.addEventListener('click', deleteAllTasks);
taskList.addEventListener('click', changeBackgroundColor);
taskList.addEventListener('dblclick', eventCompleted);
