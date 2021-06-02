// Funções de comportamento/resposta a eventos
function addTaskBehavior(_event) {
  const taskInput = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');

  if (taskInput.value) {
    const task = document.createElement('li');

    task.innerHTML = taskInput.value;

    taskList.appendChild(task);
  }

  taskInput.value = '';
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
    default:
      break;
    }
  });
};
