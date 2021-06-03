const inputText = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const olTaskList = document.getElementById('lista-tarefas');
const btnDeleteTask = document.getElementById('apaga-tudo');
const btnDeleteCompleted = document.getElementById('remover-finalizados');

function clearSelected() {
  const taskCreated = document.querySelectorAll('.task');
  for (let index = 0; index < taskCreated.length; index += 1) {
    const itemSelected = taskCreated[index].className;
    taskCreated[index].className = itemSelected.replace(/-item-selected/, '');
  }
}

function taskSelected(event) {
  const taskCreated = document.querySelectorAll('.task');
  clearSelected();
  const selected = event.target;
  for (let index = 0; index < taskCreated.length; index += 1) {
    if (taskCreated[index] === selected) {
      selected.classList.toggle('task-item-selected');
    }
  }
}

function completedTask(event) {
  const taskClick = event.target;
  const classTaskClick = taskClick.className;
  if (classTaskClick.includes(' completed')) {
    taskClick.className = classTaskClick.replace(/completed/, '');
  } else {
    taskClick.className += ' completed';
  }
}

function createClickable() {
  const taskCreated = document.querySelectorAll('.task');
  for (let index = 0; index < taskCreated.length; index += 1) {
    taskCreated[index].addEventListener('click', taskSelected);
    taskCreated[index].addEventListener('dblclick', completedTask);
  }
}

function createTask() {
  const task = inputText.value;
  const li = document.createElement('li');
  li.className = 'task';
  li.innerText = task;
  olTaskList.appendChild(li);
  inputText.value = '';
  inputText.focus();
  createClickable();
}

let taskCreated = document.querySelectorAll('.task');

function deleteTask() {
  taskCreated = document.querySelectorAll('.task');
  for (let index = 0; index < taskCreated.length; index += 1) {
    const currentTask = taskCreated[index];
    currentTask.parentNode.removeChild(currentTask);
  }
}

function deleteCompleted() {
  taskCreated = document.querySelectorAll('.task');
  for (let index = 0; index < taskCreated.length; index += 1) {
    if (taskCreated[index].className.includes(' completed')) {
      const currentTask = taskCreated[index];
      currentTask.parentNode.removeChild(currentTask);
    }
  }
}

btnCreateTask.addEventListener('click', createTask);
btnDeleteTask.addEventListener('click', deleteTask);
btnDeleteCompleted.addEventListener('click', deleteCompleted);
