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

function removeFinished() {
  const completed = document.getElementsByClassName('completed');
  while (completed.length) {
    completed[0].parentNode.removeChild(completed[0]);
  }
}

function deleteAll() {
  const ol = document.getElementById(listaTarefas);
  while (ol.children.length) {
    ol.removeChild(ol.firstChild);
  }
}

function start() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', addTask);

  const listItem = document.getElementById(listaTarefas);
  listItem.addEventListener('click', backgroundColorItem);
  listItem.addEventListener('dblclick', lineThrough);

  const buttonRemove = document.getElementById('remover-finalizados');
  buttonRemove.addEventListener('click', removeFinished);

  const buttonDeleteAll = document.getElementById('apaga-tudo');
  buttonDeleteAll.addEventListener('click', deleteAll);
}

window.onload = start;
