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
  const decoration = target.style.textDecoration;
  if (target.classList < 1) target.classList.add('completed');
  else target.classList.remove('completed');
  console.log(decoration);
}
function createTaskPress() {
  const input = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  if (input.value !== '') {
    listItem.innerText = input.value;
    input.value = '';
    list.appendChild(listItem);
    list.addEventListener('click', clickListItem);
    list.addEventListener('dblclick', markListItem);
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
