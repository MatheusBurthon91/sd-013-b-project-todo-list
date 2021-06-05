const buttonCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const section = document.querySelector('section');

buttonCreateTask.addEventListener('click', () => {
  const inputTextValue = document.querySelector('#texto-tarefa');
  const taskListItem = document.createElement('li');
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

function saveTasks() {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
  } else {
    alert('Sorry! No Web Storage support.');
  }
}
