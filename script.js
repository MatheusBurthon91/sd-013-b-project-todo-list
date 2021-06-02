const buttonCreateTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;
  newTask.classList = 'task';
  document.getElementById('lista-tarefas').appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function deselect(task) {
  if (task.classList.contains('selected')) {
    task.classList.remove('selected');
    return false;
  }
  return true;
}

buttonCreateTask.addEventListener('click', createTask);
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('task')) {
    const previousElement = document.querySelector('.selected');
    const check = deselect(event.target);
    if (previousElement) {
      previousElement.classList.remove('selected');
    }
    if (check) {
      event.target.classList.add('selected');
    }
  }
}, false);
