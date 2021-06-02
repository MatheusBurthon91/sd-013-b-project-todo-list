const listaTarefas = 'lista-tarefas';

function createLi() {
  const li = document.createElement('li');
  const task = document.getElementById('texto-tarefa');
  li.innerText = task.value;
  task.value = '';
  return li;
}

function addTask() {
  const ol = document.getElementById(listaTarefas);
  ol.appendChild(createLi());
}

function removeClass(classItem) {
  const ol = document.getElementById(listaTarefas);
  for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].classList.remove(classItem);
  }
}

function backgroundColorItem(event) {
  const eventTarget = event.target;
  removeClass('selected');
  eventTarget.classList.add('selected');
}

function lineThrough(event) {
  const eventTarget = event.target;
  if (eventTarget.classList[0] === 'completed') {
    eventTarget.classList.remove('completed');
  } else {
    eventTarget.classList.add('completed');
  }
}

function start() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addTask);

  const listItem = document.getElementById(listaTarefas);
  listItem.addEventListener('click', backgroundColorItem);
  listItem.addEventListener('dblclick', lineThrough);
}

window.onload = start;
