// Funções de comportamento/resposta a eventos
function completeTaskBehavior(event) {
  const task = event.target;

  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

function addTaskBehavior(_event) {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  if (taskInput.value) {
    const task = document.createElement('li');

    task.addEventListener('dblclick', completeTaskBehavior);
    task.classList.add('task');
    task.innerHTML = taskInput.value;

    taskList.appendChild(task);
  }

  taskInput.value = '';
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

function cleanListBehavior(_event) {
  const list = document.querySelector('#lista-tarefas');

  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function cleanCompletedBehavior(_event) {
  const completedTask = document.querySelectorAll('.completed');

  for (let index = 0; index < completedTask.length; index += 1) {
    completedTask[index].remove();
  }
}

// Waiting page to load
function clickEvents() {
  document.body.addEventListener('click', (event) => {
    const targetClass = event.target.classList[0];
    switch (targetClass) {
    case 'add-task':
      addTaskBehavior(event);
      break;
    case 'task':
      toggleTaskBehavior(event);
      break;
    case 'clean-list':
      cleanListBehavior(event);
      break;
    case 'clean-completed':
      cleanCompletedBehavior(event);
      break;
    default:
      break;
    }
  });
}

// function dblclickEvents() {
//   document.body.addEventListener('dblclick', (event) => {
//     const targetClass = event.target.classList[0];

//     switch (targetClass) {
//     case 'task':
//       completeTaskBehavior(event);
//       break;
//     default:
//       break;
//     }
//   });
// }

window.onload = () => {
  // Event Bubbling
  clickEvents();
};
