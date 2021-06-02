const buttonCreateTask = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const buttonRemoveAll = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;
  newTask.classList = 'task';
  document.getElementById('lista-tarefas').appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function isSelectedOrCompleted(task, nameClass) {
  if (task.classList.contains(nameClass)) {
    task.classList.remove(nameClass);
    return true;
  }
  return false;
}

buttonCreateTask.addEventListener('click', createTask);

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('task')) {
    const previousElement = document.querySelector('.selected');
    const selected = isSelectedOrCompleted(event.target, 'selected');
    if (previousElement) {
      previousElement.classList.remove('selected');
    }
    if (!selected) {
      event.target.classList.add('selected');
    }
  }
}, false);

taskList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task')) {
    const completed = isSelectedOrCompleted(event.target, 'completed');
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

buttonRemoveAll.addEventListener('click', clearList);
buttonRemoveFinished.addEventListener('click', removeFinished);
