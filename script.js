let inputStorage;
let toDoList = [];
const createButton = document.getElementById('criar-tarefa');
const list = document.querySelector('#lista-tarefas');
list.innerHTML = localStorage.getItem('backUp');

const clearButtonPosition = document.querySelector('article');
const clearButton = document.createElement('button');
clearButton.innerText = 'Limpar Lista';
clearButton.id = 'apaga-tudo';
clearButtonPosition.appendChild(clearButton);

const completedClearButtunPosition = document.querySelector('article');
const completedClearButton = document.createElement('button');
completedClearButton.innerText = 'Remover Tarefas Concluídas';
completedClearButton.id = 'remover-finalizados';
completedClearButtunPosition.appendChild(completedClearButton);

const saveButtonPosition = document.querySelector('article');
const saveButton = document.createElement('button');
saveButton.innerText = 'Salvar Lista';
saveButton.id = 'salvar-tarefas';
saveButtonPosition.appendChild(saveButton);

const moveUpButtonPosition = document.querySelector('article');
const moveUpButton = document.createElement('button');
moveUpButton.innerText = '^';
moveUpButton.id = 'mover-cima';
moveUpButtonPosition.appendChild(moveUpButton);

const moveDownButtonPosition = document.querySelector('article');
const moveDownButton = document.createElement('button');
moveDownButton.innerText = 'v';
moveDownButton.id = 'mover-baixo';
moveDownButtonPosition.appendChild(moveDownButton);

const removeButtonPosition = document.querySelector('article');
const removeButton = document.createElement('button');
removeButton.innerText = 'Remover Item Selecionado';
removeButton.id = 'remover-selecionado';
removeButtonPosition.appendChild(removeButton);

function inputPickUp() {
  inputStorage = document.getElementById('texto-tarefa').value;
  const liIten = document.createElement('li');
  liIten.innerText = inputStorage;
  list.appendChild(liIten);
  document.getElementById('texto-tarefa').value = '';
}

function classSelected(event) {
  const e = event;
  const position = e.target;
  if (document.querySelector('.selected') === null) {
    position.classList.add('selected');
  } else {
    document.querySelector('.selected').classList.remove('selected');
    position.classList.add('selected');
  }
}

function completedIten(event) {
  const e = event;
  const position = e.target;
  if (position.classList.contains('completed')) {
    position.classList.remove('completed');
  } else {
    position.classList.add('completed');
  }
}

function storeLiNodes() {
  toDoList = document.querySelectorAll('li');
  for (let index = 0; index < toDoList.length; index += 1) {
    toDoList[index].addEventListener('click', classSelected);
    toDoList[index].addEventListener('dblclick', completedIten);
  }
}

function listClear() {
  list.innerHTML = '';
}

function clearCompleted() {
  const completedList = document.querySelectorAll('.completed');
  for (let index = 0; index < completedList.length; index += 1) {
    const completed = completedList[index];
    if (completed.classList.contains('completed')) {
      list.removeChild(completed);
    }
  }
}

function savePage() {
  const fullList = list.innerHTML;
  localStorage.setItem('backUp', fullList);
}

function moveUp() {
  const listUp = document.querySelector('.selected');
  if (listUp !== null && listUp.previousElementSibling) {
    listUp.parentNode.insertBefore(listUp, listUp.previousElementSibling);
  }
}

function moveDown() {
  const listDown = document.querySelector('.selected');
  if (listDown !== null && listDown.nextElementSibling) {
    listDown.parentNode.insertBefore(listDown.nextElementSibling, listDown);
  }
}

function remove() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.remove();
  }
}

storeLiNodes();

createButton.addEventListener('click', inputPickUp);

createButton.addEventListener('click', storeLiNodes);

clearButton.addEventListener('click', listClear);

completedClearButton.addEventListener('click', clearCompleted);

saveButton.addEventListener('click', savePage);

moveUpButton.addEventListener('click', moveUp);

moveDownButton.addEventListener('click', moveDown);

removeButton.addEventListener('click', remove);
