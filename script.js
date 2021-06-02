// Funções de comportamento/resposta a eventos
function addTaskBehavior(_event) {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  if (taskInput.value) {
    const task = document.createElement('li');

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

function completeTaskBehavior(event) {
  const task = event.target;

  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }

}

// Waiting page to load
window.onload = () => {
  // Event Bubbling
  document.body.addEventListener('click', (event) => {
    const targetClass = event.target.classList[0];

    switch (targetClass) {
    case 'add-task':
      addTaskBehavior(event);
      break;
    case 'task':
      toggleTaskBehavior(event);
      break;
    default:
      break;
    }
  });
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
};
