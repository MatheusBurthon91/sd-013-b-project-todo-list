const createTaskButton = document.getElementById('criar-tarefa');
const deleteAllTasksButton = document.getElementById('apaga-tudo');
const deleteCompletedTasksButton = document.getElementById('remover-finalizados');
const taskToBeCreated = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  const task = document.createElement('li');
  task.innerText = taskToBeCreated.value;
  taskToBeCreated.value = '';
  taskList.appendChild(task);
}

function changeBackgroundColor(event) {
  const selected = document.getElementsByClassName('selected');
  const targetedEvent = event.target;
  if (selected.length === 1) {
    selected[0].style.backgroundColor = '';
    selected[0].classList.remove('selected');
  }
  targetedEvent.style.backgroundColor = 'rgb(128, 128, 128)';
  targetedEvent.classList.add('selected');
}

function eventCompleted(event) {
  const completedEvent = event.target;
  if (!completedEvent.classList.contains('completed')) {
    completedEvent.style.textDecoration = 'line-through';
    completedEvent.classList.add('completed');
  } else {
    completedEvent.style.textDecoration = '';
    completedEvent.classList.remove('completed');
  }
  console.log(completedEvent);
}

function deleteAllTasks() {
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }
}

function deleteCompletedTasks() {
  const tasks = taskList.children;
  for (let index = 0; index < tasks.length; index += 1) {
    console.log(tasks[index]);
    if (tasks[index].classList.contains('completed')) {
      taskList.removeChild(taskList.children[index]);
      index -= 1;
    }
  }
}

// Eventos dos elementos
createTaskButton.addEventListener('click', createTask);
deleteAllTasksButton.addEventListener('click', deleteAllTasks);
deleteCompletedTasksButton.addEventListener('click', deleteCompletedTasks);
taskList.addEventListener('click', changeBackgroundColor);
taskList.addEventListener('dblclick', eventCompleted);
