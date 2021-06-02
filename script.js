function createItemList(value) {
  const orderList = document.getElementById('lista-tarefas');
  const element = document.createElement('li');
  element.innerText = value;
  element.classList.add('listItem');
  orderList.appendChild(element);
}

function createTask() {
  const input = document.getElementById('texto-tarefa');
  createItemList(input.value);
  input.value = '';
}

function changeSelected() {
  const listItem = document.getElementsByClassName('listItem');
  for (let key = 0; key < listItem.length; key += 1) {
    if (listItem[key].className === 'listItem selected') {
      listItem[key].classList.remove('selected');
      listItem[key].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

function createSelected(event) {
  const element = event.target;
  if (element.className === 'listItem') {
    changeSelected();
    element.style.backgroundColor = 'rgb(128, 128, 128)';
    element.classList.add('selected');
  }
}

function createLineThrough(event) {
  const element = event.target;
  if (element.className === 'listItem selected') {
    changeSelected();
    element.classList.add('completed');
  } else if (element.className === 'listItem completed') {
    element.classList.remove('completed');
  }
}

function removeAllTask() {
  const listItem = document.querySelectorAll('.listItem');
  for (let key = 1; key <= listItem.length; key += 1) {
    listItem[listItem.length - key].remove();
  }
}

function removeCompletedTask() {
  const listItem = document.querySelectorAll('.completed');
  for (let key = 1; key <= listItem.length; key += 1) {
    listItem[listItem.length - key].remove();
  }
}

function init() {
  const orderList = document.getElementById('lista-tarefas');
  const buttonAddTask = document.getElementById('criar-tarefa');
  const buttonRemoveAllTask = document.getElementById('apaga-tudo');
  const buttonRemoveCompletedTask = document.getElementById('remover-finalizados');

  buttonAddTask.addEventListener('click', createTask);
  buttonRemoveAllTask.addEventListener('click', removeAllTask);
  buttonRemoveCompletedTask.addEventListener('click', removeCompletedTask);
  orderList.addEventListener('click', createSelected);
  orderList.addEventListener('dblclick', createLineThrough);
}

window.onload = () => {
  init();
};
