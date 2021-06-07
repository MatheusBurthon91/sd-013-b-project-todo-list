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
  if (!completedEvent.classList.contains('completed')) {
    completedEvent.style.textDecoration = 'line-through';
    completedEvent.classList.add('completed');
  } else {
    completedEvent.style.textDecoration = '';
    completedEvent.classList.remove('completed');
  }
  console.log(completedEvent);
}

function deleteAllTasks(event) {
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }
}

function deleteCompletedTasks(event) {
  const tasks = taskList.children;
  console.log(tasks);
  let removed;
  for (let index = 0; index < tasks.length; index += 1) {
    console.log(tasks[index]);
    if (tasks[index].classList.contains('completed')) {
      removed = taskList.removeChild(taskList.children[index]);
      console.log('You were removed:');
      console.log(removed);
      index -= 1;
    }
  }
}

const createTaskButton = document.getElementById('criar-tarefa');
const deleteAllTasksButton = document.getElementById('apaga-tudo');
const deleteCompletedTasksButton = document.getElementById('remover-finalizados');
let taskToBeCreated = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

// Eventos dos elementos
createTaskButton.addEventListener('click', createTask);
deleteAllTasksButton.addEventListener('click', deleteAllTasks);
deleteCompletedTasksButton.addEventListener('click', deleteCompletedTasks);
taskList.addEventListener('click', changeBackgroundColor);
taskList.addEventListener('dblclick', eventCompleted);
