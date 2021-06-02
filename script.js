const addTaskBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const olTaskList = document.querySelector('#lista-tarefas');

function addTaskToList(task) {
  const newTask = document.createElement('li');
  newTask.setAttribute('class', 'task');
  newTask.innerHTML = task;
  olTaskList.appendChild(newTask);
}

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTaskToList(input.value);
    input.value = '';
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('task')) {
    const tasks = document.querySelector('#lista-tarefas').children;
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].style.background = 'none';
    }
    e.target.style.background = 'rgb(128, 128, 128)';
  }
});

document.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('task')) {
    const element = e.target;
    element.classList.toggle('completed');
  }
});

const clearAllBtn = document.querySelector('#apaga-tudo');
clearAllBtn.addEventListener('click', () => {
  olTaskList.innerHTML = '';
});
