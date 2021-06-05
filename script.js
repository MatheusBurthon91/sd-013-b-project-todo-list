const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const section = document.querySelector('section');

buttonCreateTask.addEventListener('click', () => {
  const inputTextValue = document.querySelector('#texto-tarefa');
  const taskListItem = document.createElement('li');
  taskListItem.classList.add('list');
  taskListItem.innerHTML = inputTextValue.value;
  taskList.appendChild(taskListItem);
  inputTextValue.value = '';
});

taskList.addEventListener('click', (event) => {
  const assistant = event;
  const classToRemove = document.querySelector('.selected');
  if (classToRemove === null) {
    assistant.target.classList.add('selected');
    assistant.target.style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    classToRemove.classList.remove('selected');
    classToRemove.style.backgroundColor = 'white';
    assistant.target.classList.add('selected');
    assistant.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

taskList.addEventListener('dblclick', (event) => {
  const assistant = event;
  if (assistant.target.classList.contains('completed')) {
    assistant.target.classList.remove('completed');
    assistant.target.style.textDecoration = '';
  } else {
    assistant.target.classList.add('completed');
    assistant.target.style.textDecoration = 'line-through solid rgb(0 , 0 , 0)';
  }
});

function createRemoveButton() {
  const removeButton = document.createElement('button');
  removeButton.id = 'apaga-tudo';
  removeButton.innerHTML = 'X - Apaga tudo';
  section.appendChild(removeButton);
}

createRemoveButton();

const removeAllChildsButton = document.getElementById('apaga-tudo');

removeAllChildsButton.addEventListener('click', () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
});

function createCompletedTask() {
  const removeCompleted = document.createElement('button');
  removeCompleted.id = 'remover-finalizados';
  removeCompleted.innerHTML = 'Ø - Remover finalizados';
  section.appendChild(removeCompleted);
}

createCompletedTask();

const removeAllCompletedButton = document.getElementById('remover-finalizados');

removeAllCompletedButton.addEventListener('click', () => {
  const objectToRemove = document.querySelectorAll('.completed');
  for (let index = 0; index < objectToRemove.length; index += 1) {
    objectToRemove[index].remove();
  }
});

function createButtonSaveTask() {
  const saveTasksButtons = document.createElement('button');
  saveTasksButtons.id = 'salvar-tarefas';
  saveTasksButtons.innerHTML = '✓ - Salvar tarefas';
  section.appendChild(saveTasksButtons);
}

createButtonSaveTask();

const saveButton = document.querySelector('#salvar-tarefas');

saveButton.addEventListener('click', () => {
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem('taskListItem', taskList.innerHTML);
  } else {
    alert('Sorry! No Web Storage support.');
  }
});

const saved = localStorage.getItem('taskListItem');

if (saved) {
  taskList.innerHTML = saved;
}

function createMoveUpButton() {
  const moveUpButton = document.createElement('button');
  moveUpButton.id = 'mover-cima';
  moveUpButton.innerHTML = '↑ - Mover para cima';
  section.appendChild(moveUpButton);
}

createMoveUpButton();

function createMoveDownButton() {
  const moveDownButton = document.createElement('button');
  moveDownButton.id = 'mover-baixo';
  moveDownButton.innerHTML = '↓ - Mover para baixo';
  section.appendChild(moveDownButton);
}

createMoveDownButton();

const upperButton = document.getElementById('mover-cima');

upperButton.addEventListener('click', () => {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === taskList.firstChild) {
    alert('Não é possível mover o item');
  } else if (itemSelected === null) {
    alert('Selecione um item primeiro');
  } else {
    itemSelected.parentNode.insertBefore(itemSelected, itemSelected.previousSibling);
  }
});

const downButton = document.getElementById('mover-baixo');

downButton.addEventListener('click', () => {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === taskList.lastChild) {
    alert('Não é possível mover o item');
  } else if (itemSelected === null) {
    alert('Selecione um item primeiro');
  } else {
    itemSelected.parentNode.insertBefore(itemSelected, itemSelected.nextSibling.nextSibling);
  }
});

function createRemoveSelectedButton() {
  const removeSelected = document.createElement('button');
  removeSelected.id = 'remover-selecionado';
  removeSelected.innerHTML = 'Remover selecionado'
  section.appendChild(removeSelected);
}

createRemoveSelectedButton();

const removeSelectedButton = document.getElementById('remover-selecionado');

removeSelectedButton.addEventListener('click', () => {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected === null) {
    alert('Selecione um item primeiro');
  } else {
    itemSelected.remove();
  }
});
