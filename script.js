const buttonCreateTask = document.querySelector('#criar-tarefa');

buttonCreateTask.addEventListener('click', () => {
  const inputTextValue = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const taskListItem = document.createElement('li');
  taskListItem.innerHTML = inputTextValue.value;
  taskList.appendChild(taskListItem);
  inputTextValue.value = '';
});

const taskList = document.querySelector('#lista-tarefas');

taskList.addEventListener('click', (event) => {
  const assistant = event.target;
  console.log(assistant);
  assistant.style.backgroundColor = 'rgb(128, 128, 128)';
});
