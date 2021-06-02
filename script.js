// ====================
// Variables
// ====================
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
let listItem = document.querySelectorAll('li');

// ====================
// Functions
// ====================
function createListItem() {
  if (input.value === '') {
    alert('Tarefa vazia');
  } else {
    const createLi = document.createElement('li');
    createLi.innerText = input.value;
    createLi.classList.add('list-item');
    ol.appendChild(createLi);
  }
}

function clearInput() {
  input.value = '';
}

function addSelectClass(event) {
  listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] === event.target) {
      listItem[i].classList.add('selected');
    } else {
      listItem[i].classList.remove('selected');
    }
  }
}

function removeSelectedClass() {
  listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('selected')) {
      listItem[i].classList.remove('selected');
    }
  }
}

function bgColorLi() {
  listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('selected')) {
      listItem[i].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      listItem[i].style.backgroundColor = '';
    }
  }
}

function addCompletedClass(event) {
  listItem = document.querySelectorAll('li');
  const evento = event;
  if (event.target.classList.contains('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}

function removeCompleted() {
  listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('completed')) {
      ol.removeChild(listItem[i]);
    }
  }
}

function removeSelected() {
  listItem = document.querySelectorAll('li');
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('selected')) {
      ol.removeChild(listItem[i]);
    }
  }
}

function moveUp() {
  let aClass;
  let aText;
  let bClass;
  let bText;
  for (let i = 0; i < ol.children.length; i += 1) {
    if (ol.children[i].classList.contains('selected') && i !== 0) {
      aClass = ol.children[i].className;
      aText = ol.children[i].innerText;
      bClass = ol.children[i - 1].className;
      bText = ol.children[i - 1].innerText;
      ol.children[i - 1].className = aClass;
      ol.children[i - 1].innerText = aText;
      ol.children[i].className = bClass;
      ol.children[i].innerText = bText;
      bgColorLi();
    }
  }
}

function moveDown() {
  let aClass;
  let aText;
  let bClass;
  let bText;
  for (let i = 0; i < ol.children.length; i += 1) {
    if (ol.children[i].classList.contains('selected') && i !== ol.children.length - 1) {
      aClass = ol.children[i].className;
      aText = ol.children[i].innerText;
      bClass = ol.children[i + 1].className;
      bText = ol.children[i + 1].innerText;
      ol.children[i + 1].className = aClass;
      ol.children[i + 1].innerText = aText;
      ol.children[i].className = bClass;
      ol.children[i].innerText = bText;
      bgColorLi();
      break;
    }
  }
}

// ====================
// New Buttons
// ====================

// Clear Button
const clearBtn = document.createElement('button');
clearBtn.id = 'apaga-tudo';
clearBtn.innerText = 'Clear All';
clearBtn.style.marginRight = '8px';
document.body.appendChild(clearBtn);

// Remove Completed Button
const removeCompletedBtn = document.createElement('button');
removeCompletedBtn.id = 'remover-finalizados';
removeCompletedBtn.innerText = 'Remove Completed Tasks';
removeCompletedBtn.style.marginRight = '8px';
document.body.appendChild(removeCompletedBtn);

// Save Tasks
const saveBtn = document.createElement('button');
saveBtn.id = 'salvar-tarefas';
saveBtn.innerText = 'Save Tasks';
saveBtn.style.marginRight = '8px';
document.body.appendChild(saveBtn);

// Move up
const moveUpBtn = document.createElement('button');
moveUpBtn.id = 'mover-cima';
moveUpBtn.innerText = 'Move Up';
moveUpBtn.style.marginRight = '8px';
document.body.appendChild(moveUpBtn);

// Move down
const moveDownBtn = document.createElement('button');
moveDownBtn.id = 'mover-baixo';
moveDownBtn.innerText = 'Move Down';
moveDownBtn.style.marginRight = '8px';
document.body.appendChild(moveDownBtn);

// Remove Selected Button
const removeSelectedBtn = document.createElement('button');
removeSelectedBtn.id = 'remover-selecionado';
removeSelectedBtn.innerText = 'Remove Selected Task';
document.body.appendChild(removeSelectedBtn);

// ====================
// EventListeners
// ====================
button.addEventListener('click', () => {
  createListItem();
  clearInput();
});

ol.addEventListener('click', (event) => {
  if (event.target.classList.contains('list-item')) {
    addSelectClass(event);
    bgColorLi();
  }
});

ol.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('list-item')) {
    addCompletedClass(event);
  }
});

clearBtn.addEventListener('click', () => {
  ol.innerHTML = '';
});

removeCompletedBtn.addEventListener('click', () => {
  removeCompleted();
});

saveBtn.addEventListener('click', () => {
  localStorage.setItem('ol', ol.innerHTML);
});

moveUpBtn.addEventListener('click', () => {
  moveUp();
});

moveDownBtn.addEventListener('click', () => {
  moveDown();
});

removeSelectedBtn.addEventListener('click', () => {
  removeSelected();
});

// ====================
// STORAGE
// ====================

if (localStorage.getItem('ol') !== undefined) {
  ol.innerHTML = localStorage.getItem('ol');
  removeSelectedClass();
  bgColorLi();
}
