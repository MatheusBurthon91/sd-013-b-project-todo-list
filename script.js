const input = document.querySelector('#texto-tarefa');
const createTask = document.querySelector('#criar-tarefa');
const listTasks = document.querySelector('#lista-tarefas');

createTask.addEventListener('click', () => {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  listTasks.appendChild(newLi);
  input.value = '';
});
