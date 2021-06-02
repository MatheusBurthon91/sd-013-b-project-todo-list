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

function backgroundColorItem(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function start() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addTask);

  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('click', backgroundColorItem);
}

window.onload = start;
