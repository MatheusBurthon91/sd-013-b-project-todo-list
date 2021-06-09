const buttonTaskCreated = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');

function createTask(task, classOfTask) {
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = classOfTask;
  tasksList.appendChild(listItem);
  txtInput.value = ''; // call the function to clear the input
}

function createTaskBtn() {
  const task = txtInput.value;
  const classOfTask = 'tarefa';
  createTask(task, classOfTask);
}

buttonTaskCreated.addEventListener('click', createTaskBtn);

tasksList.addEventListener('click', (event) => {
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
