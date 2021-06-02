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
  const assistant = event;
  const classToRemove = document.querySelector('.selected');
  console.log(classToRemove);
  if (classToRemove === null) {
    assistant.target.classList.add('selected');
    assistant.target.style.backgroundColor = 'rgb(128, 128, 128)';
    console.log(classToRemove);
  } else {
    classToRemove.classList.remove('selected');
    classToRemove.style.backgroundColor = 'white';
    assistant.target.classList.add('selected');
    assistant.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});
