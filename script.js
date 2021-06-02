const buttonCreateTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonRemoveAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');

taskList.innerHTML = localStorage.getItem('taskList');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;
  newTask.classList = 'task';
  document.getElementById('lista-tarefas').appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function isCompleted(task) {
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
    return true;
  }
  return false;
}

buttonCreateTask.addEventListener('click', createTask);

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task')) {
    const previousElement = document.querySelector('.selected');
    if (previousElement) {
      previousElement.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}, false);

taskList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task')) {
    const completed = isCompleted(event.target);
    if (!completed) {
      event.target.classList.add('completed');
    }
  }
}, false);

function clearList() {
  taskList.innerHTML = '';
}

function removeFinished() {
  const finishedTaskList = document.querySelectorAll('.completed');
  for (let index = 0; index < finishedTaskList.length; index += 1) {
    taskList.removeChild(finishedTaskList[index]);
  }
}

function saveTasks() {
  const tasks = taskList.innerHTML;
  localStorage.setItem('taskList', tasks);
}

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousSibling) {
    taskList.insertBefore(selected, selected.previousSibling);
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected && selected.nextSibling) {
    taskList.insertBefore(selected.nextSibling, selected);
  }
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected) {
    taskList.removeChild(selected);
  }
}

buttonRemoveAll.addEventListener('click', clearList);
buttonRemoveFinished.addEventListener('click', removeFinished);
buttonSave.addEventListener('click', saveTasks);
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
buttonRemoveSelected.addEventListener('click', removeSelected);
