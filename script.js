function createLi() {
  const li = document.createElement('li');
  const task = document.getElementById('texto-tarefa');
  li.innerText = task.value;
  task.value = '';
  return li;
}

function addTask() {
  const ol = document.getElementById('lista-tarefas');
  ol.appendChild(createLi());
}

function start() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addTask);
}

window.onload = start;
