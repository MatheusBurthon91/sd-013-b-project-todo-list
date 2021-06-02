window.onload = () => {
  addTaskButton();
}

function addNewTask(text) {
  const task = document.createElement('li');
  const taskList = document.querySelector('#lista-tarefas');
  task.innerText = text;
  taskList.appendChild(task);
  return task;
}

function addTaskButton() {
  const addTaksButton = document.querySelector('#criar-tarefa');
  addTaksButton.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('#texto-tarefa');
    
    if (input.value !== '') {
      addNewTask(input.value);
      input.value = '';
    }
  });
}