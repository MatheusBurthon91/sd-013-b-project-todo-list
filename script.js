// Declrando constantes
const constants = {};

// Funções de comportamento/resposta a eventos
function addTaskBehavior(_event) {
  const taskInput = document.querySelector('#texto-tarefa');

  if (taskInput.value) {
    const task = document.createElement('li');

    task.classList.add('task');
    task.innerHTML = taskInput.value;

    constants.taskList.appendChild(task);
  }

  taskInput.value = '';
}

function cleanCompletedBehavior(_event) {
  const completedTask = document.querySelectorAll('.completed');

  for (let index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}

function cleanListBehavior(_event) {
  while (constants.taskList.hasChildNodes()) {
    constants.taskList.removeChild(constants.taskList.firstChild);
  }
}

function completeTaskBehavior(event) {
  const task = event.target;

  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function saveListBehavior(_event) {
  const tasks = document.querySelectorAll('.task');

  if (tasks.length) {
    const savedTasks = {};

    for (let index = 0; index < tasks.length; index += 1) {
      const taskName = `${index}.${tasks[index].innerHTML}`;
      savedTasks[taskName] = tasks[index].className;
    }

    localStorage.setItem('sd-13-todo-list-project:task-list', JSON.stringify(savedTasks));
  }
}

function toggleTaskBehavior(event) {
  const task = event.target;
  const selectedTask = document.querySelector('.task.selected');

  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }

  if (selectedTask !== task) {
    task.classList.add('selected');
  }
}

// Funções de gerenciamento de eventos
function clickEvents() {
  document.body.addEventListener('click', (event) => {
    const targetClass = event.target.classList[0];
    switch (targetClass) {
    case 'add-task': addTaskBehavior(event);
      break;
    case 'clean-completed': cleanCompletedBehavior(event);
      break;
    case 'clean-list': cleanListBehavior(event);
      break;
    case 'save-list': saveListBehavior(event);
      break;
    case 'task': toggleTaskBehavior(event);
      break;
    default:
      break;
    }
  });
}

function dblclickEvents() {
  document.body.addEventListener('dblclick', (event) => {
    const targetClass = event.target.classList[0];
    switch (targetClass) {
    case 'task':
      completeTaskBehavior(event);
      break;
    default:
      break;
    }
  });
}

// Funções de criação dinâmica de elementos e carregamento da página
function loadList(savedTasks) {
  const tasks = JSON.parse(savedTasks);

  Object.keys(tasks).forEach((taskKey) => {
    const task = document.createElement('li');
    const taskName = taskKey.split('.')[1];

    task.className = tasks[taskKey];
    task.innerHTML = taskName;

    constants.taskList.appendChild(task);
  });
}

window.onload = () => {
  // Setando constantes
  constants.taskList = document.querySelector('#lista-tarefas');

  // Checking for existing list
  const savedTasks = localStorage.getItem('sd-13-todo-list-project:task-list');

  if (savedTasks) {
    loadList(savedTasks);
  }

  // Event Bubbling
  clickEvents();
  dblclickEvents();
};
