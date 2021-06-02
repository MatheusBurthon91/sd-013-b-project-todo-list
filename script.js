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
  const classToRemove = document.querySelector('.completed');
  if (classToRemove === null) {
    assistant.target.classList.add('completed');
    assistant.target.style.textDecoration = 'line-through solid rgb(0 , 0 , 0)';
  } else {
    classToRemove.classList.remove('completed');
    classToRemove.style.textDecoration = '';
  }
});

function createRemoveButton() {
  const removeButton = document.createElement('button');
  removeButton.id = 'apaga-tudo';
  removeButton.innerHTML = 'Apaga tudo';
  section.appendChild(removeButton);
}

createRemoveButton();

const removeAllChildsButton = document.getElementById('apaga-tudo');

removeAllChildsButton.addEventListener('click', () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
});
