// ====================
// Variables
// ====================
const paragraph = document.getElementById('funcionamento');
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

// ====================
// STORAGE
// ====================

if (localStorage.getItem('ol') !== undefined) {
  ol.innerHTML = localStorage.getItem('ol');
}
