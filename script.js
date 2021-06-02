function removeSelectedListItem() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      list[index].style.backgroundColor = 'white';
      return;
    }
  }
}
function clickListItem(event) {
  const { target } = event;
  removeSelectedListItem();
  target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function markListItem(event) {
  const { target } = event;
  // const decoration = target.style.textDecoration;
  if (target.classList < 1) target.classList.add('completed');
  else target.classList.remove('completed');
}

function createTask(string) {
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerText = string;
  taskList.appendChild(task);
  task.addEventListener('click', clickListItem);
  task.addEventListener('dblclick', markListItem);
  return task;
}

function createTaskPress() {
  const input = document.querySelector('#texto-tarefa');
  if (input.value !== '') {
    createTask(input.value);
    input.value = '';
  }
}
function removeAllTasks() {
  const list = document.querySelector('#lista-tarefas').children;
  const listLength = list.length;
  for (let index = listLength - 1; index >= 0; index -= 1) {
    list[index].remove();
  }
}

function isCompletedTask(task) {
  const classes = task.classList;
  for (let index = 0; index < classes.length; index += 1) {
    if (classes[index] === 'completed') return true;
  }
  return false;
}

function removeLinedTasks() {
  const list = document.querySelector('#lista-tarefas').children;
  const listLength = list.length;
  for (let index = listLength - 1; index >= 0; index -= 1) {
    if (isCompletedTask(list[index])) list[index].remove();
  }
}

function saveAllTasks() {
  let stringList = '';
  const list = document.querySelector('#lista-tarefas').children;
  for (let index = 0; index < list.length; index += 1) {
    stringList += `${list[index].innerText}`;
    if (isCompletedTask(list[index])) stringList += '.completed';
    if (index < list.length - 1) stringList += '/final/';
  }
  window.localStorage.setItem('lista', stringList);
}

function loadAllTasks() {
  const local = window.localStorage.getItem('lista');
  console.log(local);
  if (local !== null) {
    const tasks = local.split('/final/');
    // const tasks = window.localStorage.getItem('lista').split(' ');
    for (let index = 0; index < tasks.length; index += 1) {
      console.log(tasks[index]);
      if (tasks[index].split('.')[1] === 'completed') {
        const task = createTask((tasks[index].split('.')[0]));
        task.classList.add('completed');
      } else createTask(tasks[index]);
    }
  }
}

loadAllTasks();
