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

function removeBackgroundColor() {
  const ol = document.getElementById('lista-tarefas');
  for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].style.backgroundColor = 'transparent';
  }
}

function backgroundColorItem(event) {
  const eventTarget = event.target;
  removeBackgroundColor();
  eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function start() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addTask);

  const listItem = document.getElementById('lista-tarefas');
  listItem.addEventListener('click', backgroundColorItem);
}

window.onload = start;
