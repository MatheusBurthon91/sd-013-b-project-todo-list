const idOrderList = 'lista-tarefas';

function createItemList(value) {
  const orderList = document.getElementById(idOrderList);
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

function saveTask() {
  const listItem = document.getElementsByClassName('listItem');
  const arrayListItemText = [];
  const arrayListItemClass = [];
  for (let key = 0; key < listItem.length; key += 1) {
    arrayListItemText.push(listItem[key].textContent);
    arrayListItemClass.push(listItem[key].className);
  }
  localStorage.setItem('listText', JSON.stringify(arrayListItemText));
  localStorage.setItem('listClass', JSON.stringify(arrayListItemClass));
}

function changeSaveList(key, className) {
  const orderList = document.getElementById(idOrderList);
  const orderListChild = orderList.children;
  orderListChild[key].className = className;
}

function saveTaskImplementer() {
  if (localStorage.listText) {
    const saveListText = JSON.parse(localStorage.listText);
    const saveListClass = JSON.parse(localStorage.listClass);
    for (let key = 0; key < saveListText.length; key += 1) {
      createItemList(saveListText[key]);
      changeSaveList(key, saveListClass[key]);
    }
  }
}

function init() {
  const orderList = document.getElementById(idOrderList);
  const buttonAddTask = document.getElementById('criar-tarefa');
  const buttonRemoveAllTask = document.getElementById('apaga-tudo');
  const buttonRemoveCompletedTask = document.getElementById('remover-finalizados');
  const buttonSaveTask = document.getElementById('salvar-tarefas');

  buttonAddTask.addEventListener('click', createTask);
  buttonRemoveAllTask.addEventListener('click', removeAllTask);
  buttonRemoveCompletedTask.addEventListener('click', removeCompletedTask);
  buttonSaveTask.addEventListener('click', saveTask);
  orderList.addEventListener('click', createSelected);
  orderList.addEventListener('dblclick', createLineThrough);
}

window.onload = () => {
  init();
  saveTaskImplementer();
};
