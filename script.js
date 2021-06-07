let inputStorage;
const createButton = document.getElementById('criar-tarefa');

function inputPickUp() {
  inputStorage = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const listIten = document.createElement('li');
  listIten.innerText = inputStorage;
  list.appendChild(listIten);
  document.getElementById('texto-tarefa').value = '';
}

createButton.addEventListener('click', inputPickUp);

let toDoList = [];

function classSelected(event) {
  const e = event;
  const itenList = document.querySelectorAll('li')[[].indexOf.call(toDoList, e.target)];
  if (document.querySelector('.selected') === null) {
    itenList.classList.add('selected');
  } else {
    document.querySelector('.selected').classList.remove('selected');
    itenList.classList.add('selected');
  }
}

function completedIten(event) {
  const e = event;
  const itenList = document.querySelectorAll('li')[[].indexOf.call(toDoList, e.target)];
  if (itenList.classList.contains('completed')) {
    itenList.classList.remove('completed');
  } else {
    // document.querySelector('.completed').classList.remove('completed');
    itenList.classList.add('completed');
  }
}

function storeLiNodes() {
  toDoList = document.querySelectorAll('li');
  for (let index = 0; index < toDoList.length; index += 1) {
    toDoList[index].addEventListener('click', classSelected);
    toDoList[index].addEventListener('dblclick', completedIten);
  }
}

createButton.addEventListener('click', storeLiNodes);

const clearButtonPosition = document.querySelector('article');
const clearButton = document.createElement('button');
clearButton.innerText = 'Limpar Lista';
clearButton.id = 'apaga-tudo';
clearButtonPosition.appendChild(clearButton);

function listClear() {
  const list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
}

clearButton.addEventListener('click', listClear);

const completedClearButtunPosition = document.querySelector('article');
const completedClearButton = document.createElement('button');
completedClearButton.innerText = 'Remover Tarefas Concluídas';
completedClearButton.id = 'remover-finalizados';
completedClearButtunPosition.appendChild(completedClearButton);

function clearCompleted() {
  const list = document.querySelector('#lista-tarefas');
  const completedList = document.querySelectorAll('.completed');
  for (let index = 0; index < completedList.length; index += 1) {
    const completed = completedList[index];
    if (completed.classList.contains('completed')) {
      list.removeChild(completed);
    }
  }
}

completedClearButton.addEventListener('click', clearCompleted);
