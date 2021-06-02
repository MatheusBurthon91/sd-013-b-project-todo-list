const buttonCreateTask = document.querySelector('#criar-tarefa');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

buttonCreateTask.addEventListener('click', createTask);
