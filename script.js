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

function saveTasks() {
  const li = document.querySelectorAll('li');
  let tasks = '';
  let classes = '';
  for (let index = 0; index < li.length; index += 1) {
    tasks += li[index].innerText;
    tasks += ',';
    classes += li[index].classList.value;
    classes += ',';
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('classes', JSON.stringify(classes));
}

function loadTasks() {
  if (localStorage.getItem('tasks') === null) {
    return;
  }
  const tasks = JSON.parse(localStorage.getItem('tasks')).split(',');
  tasks.pop();
  const classes = JSON.parse(localStorage.getItem('classes')).split(',');
  classes.pop();
  for (let index = 0; index < tasks.length; index += 1) {
    addTask();
    const li = document.querySelectorAll('li');
    li[index].innerText = tasks[index];
    if (classes[index] !== '') {
      console.log(classes[index]);
      li[index].className = classes[index];
    }
  }
}

function start() {
  loadTasks();

  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', addTask);

  const listItem = document.getElementById(listaTarefas);
  listItem.addEventListener('click', backgroundColorItem);
  listItem.addEventListener('dblclick', lineThrough);

  const buttonRemove = document.getElementById('remover-finalizados');
  buttonRemove.addEventListener('click', removeFinished);

  const buttonDeleteAll = document.getElementById('apaga-tudo');
  buttonDeleteAll.addEventListener('click', deleteAll);

  const buttonSaveTasks = document.getElementById('salvar-tarefas');
  buttonSaveTasks.addEventListener('click', saveTasks);
}

window.onload = start;
