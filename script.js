let itemList;
let task;
let taskText;
let isSelected;
const listSelect = document.querySelector('#lista-tarefas');
const list = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const buttonClearCompl = document.getElementById('remover-finalizados');

function addToList() {
  task = document.getElementById('texto-tarefa').value;
  taskText = document.createTextNode(task);
  itemList = document.createElement('li');
  itemList.classList.add('list');
  list.appendChild(itemList);
  itemList.appendChild(taskText);
  document.getElementById('texto-tarefa').value = ('');
}

buttonAdd.addEventListener('click', addToList);

function colorBackground(event) {
  const clicado = event.target;
  isSelected = document.querySelector('.listBackground');
  if (clicado.id !== 'lista-tarefas') {
    if (isSelected === null) {
      clicado.classList.toggle('listBackground');
    } else {
      isSelected.classList.toggle('listBackground');
      clicado.classList.toggle('listBackground');
    }
  }
}

listSelect.addEventListener('click', colorBackground);

function completeTask(event) {
  const clicado = event.target;
  isComplete = document.querySelector('.completed');
  if (clicado.id !== 'lista-tarefas') {
    clicado.classList.toggle('completed');
  }
}

listSelect.addEventListener('dblclick', completeTask);

function clearList() {
  const item = document.getElementsByClassName('list');
  const size = item.length;
  for (let index = 0; index < size; index += 1) {
    item[item.length - 1].remove();
  }
}

buttonClear.addEventListener('click', clearList);

function clearCompl() {
  const item = document.getElementsByClassName('completed');
  const size = item.length;
  for (let index = 0; index < size; index += 1) {
    item[item.length - 1].remove();
  }
}

buttonClearCompl.addEventListener('click', clearCompl);
