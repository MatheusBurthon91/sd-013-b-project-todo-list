const buttonCreateTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

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
list.addEventListener('click', (event) => {
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

list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task')) {
    const completed = isSelectedOrCompleted(event.target, 'completed');
    if (!completed) {
      event.target.classList.add('completed');
    }
  }
}, false);
