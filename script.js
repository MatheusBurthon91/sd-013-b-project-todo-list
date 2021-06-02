const addTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const olTaskList = document.querySelector('#lista-tarefas');

function addTaskToList(task) {
  const newTask = document.createElement('li');
  newTask.innerHTML = task;
  olTaskList.appendChild(newTask);
}

addTaskBtn.addEventListener('click', (e) => {
  if (input.value !== '') {
    addTaskToList(input.value);
    input.value = '';
  }
});
