const buttonTaskCreated = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');
const section = document.querySelector('#box-section');

function createTask(task, classOfTask) {
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = classOfTask;
  tasksList.appendChild(listItem);
  txtInput.value = '';
}

function createTaskBtn() {
  const task = txtInput.value;
  const classOfTask = 'tarefa';
  createTask(task, classOfTask);
}

function removeButton() {
  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerHTML = 'Apaga tarefas da lista';
  section.appendChild(button);
}

removeButton();

buttonTaskCreated.addEventListener('click', createTaskBtn);

tasksList.addEventListener('click', (event) => {
  const auxiliar = event;
  console.log(auxiliar);
  const classToRemove = document.querySelector('.selected');
  if (classToRemove === null) {
    auxiliar.target.classList.add('selected');
  } else {
    classToRemove.classList.remove('selected');
    auxiliar.target.classList.add('selected');
  }
});

tasksList.addEventListener('dblclick', (event) => {
  const auxiliar = event;
  console.log(event);
  if (auxiliar.target.classList.contains('completed')) {
    auxiliar.target.classList.remove('completed');
  } else {
    auxiliar.target.classList.add('completed');
  }
});
