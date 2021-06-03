// Declrando constantes
const appState = {
  taskList: undefined,
  selectedTask: undefined,
};

// Funções de comportamento/resposta a eventos
function addTaskBehavior(_event) {
  const taskInput = document.querySelector('#texto-tarefa');

  if (taskInput.value) {
    const task = document.createElement('li');

    task.classList.add('task');
    task.innerHTML = taskInput.value;

    appState.taskList.appendChild(task);
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
  while (appState.taskList.hasChildNodes()) {
    appState.taskList.removeChild(appState.taskList.firstChild);
  }
}

function cleanSelectedBehavior(_event) {
  if (appState.selectedTask) {
    appState.selectedTask.remove();
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

function moveDownBehavior(_event) {
  if (appState.selectedTask && appState.selectedTask !== appState.taskList.lastChild) {
    const nextSibling = appState.selectedTask.nextElementSibling;
    nextSibling.insertAdjacentElement('afterend', appState.selectedTask);
  }
}

function moveUpBehavior(_event) {
  if (appState.selectedTask && appState.selectedTask !== appState.taskList.firstChild) {
    const previousSibling = appState.selectedTask.previousElementSibling;
    previousSibling.insertAdjacentElement('beforebegin', appState.selectedTask);
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

  if (appState.selectedTask) {
    appState.selectedTask.classList.remove('selected');
  }

  task.classList.add('selected');
  appState.selectedTask = task;
}

// Funções de gerenciamento de eventos
// Botões
function formButtonsSwitch(event) {
  const targetClass = event.target.classList[1];
  switch (targetClass) {
  case 'add-task': addTaskBehavior(event);
    break;
  default:
    break;
  }
}

function editButtonsSwitch(event) {
  const targetClass = event.target.classList[1];
  switch (targetClass) {
  case 'clean-completed': cleanCompletedBehavior(event);
    break;
  case 'clean-list': cleanListBehavior(event);
    break;
  case 'clean-selected': cleanSelectedBehavior(event);
    break;
  case 'save-list': saveListBehavior(event);
    break;
  default:
    break;
  }
}

function interactionButtonsSwitch(event) {
  const targetClass = event.target.classList[1];
  switch (targetClass) {
  case 'move-down': moveDownBehavior(event);
    break;
  case 'move-up': moveUpBehavior(event);
    break;
  default:
    break;
  }
}

function buttonSwitch(event) {
  const targetClass = event.target.parentElement.classList[0];
  switch (targetClass) {
  case 'edit-buttons': editButtonsSwitch(event);
    break;
  case 'interaction-buttons': interactionButtonsSwitch(event);
    break;
  case 'task-form': formButtonsSwitch(event);
    break;
  default:
    break;
  }
}

// Gerais
function clickEvents() {
  document.body.addEventListener('click', (event) => {
    const targetClass = event.target.classList[0];
    switch (targetClass) {
    case 'button': buttonSwitch(event);
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
    if (task.classList.contains('selected')) {
      appState.selectedTask = task;
    }

    appState.taskList.appendChild(task);
  });
}

window.onload = () => {
  // Setando constantes
  appState.taskList = document.querySelector('#lista-tarefas');

  // Checking for existing list
  const savedTasks = localStorage.getItem('sd-13-todo-list-project:task-list');

  if (savedTasks) {
    loadList(savedTasks);
  }

  // Event Bubbling
  clickEvents();
  dblclickEvents();
};
