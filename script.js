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

const createTaskButton = document.getElementById('criar-tarefa');
let taskToBeCreated = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');

// Eventos dos elementos
createTaskButton.addEventListener('click', createTask);
taskList.addEventListener('click', changeBackgroundColor);
