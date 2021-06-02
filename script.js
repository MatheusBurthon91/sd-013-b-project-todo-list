const taskListId = '#lista-tarefas';

function createNewTask(text, id) {
  const task = document.createElement('li');
  task.innerText = text;
  task.id = id;
  task.className = 'task';

  return task;
}

function addButtonEventListener() {
  const addTaskButton = document.querySelector('#criar-tarefa');

  addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    const textInput = document.querySelector('#texto-tarefa');

    if (textInput.value) {
      const taskList = document.querySelector(taskListId);
      const taskNumber = taskList.children.length;

      taskList.appendChild(createNewTask(textInput.value, `task${taskNumber}`));
      textInput.value = '';
    } else {
      alert('Sua tarefa precisa ter um texto descritivo!');
    }
  });
}

function addTaskSelectionEvent() {
  const taskList = document.querySelector(taskListId);

  taskList.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('task')) {
      const currentSelected = document.querySelector('.selected');

      if (currentSelected) {
        currentSelected.classList.remove('selected');
        target.classList.add('selected');
      } else {
        target.classList.add('selected');
      }
    }
  });
}

function addTaskCompletionEvent() {
  const taskList = document.querySelector(taskListId);

  taskList.addEventListener('dblclick', (event) => {
    const { target } = event;

    if (target.classList.contains('task')) {
      if (target.classList.contains('completed')) {
        target.classList.remove('completed');
      } else {
        target.classList.add('completed');
      }
    }
  });
}

function addClearListEvent() {
  const clearButton = document.querySelector('#apaga-tudo');

  clearButton.addEventListener('click', (event) => {
    event.preventDefault();

    const taskList = document.querySelector(taskListId);

    taskList.innerHTML = '';
  });
}

window.onload = () => {
  addButtonEventListener();
  addTaskSelectionEvent();
  addTaskCompletionEvent();
  addClearListEvent();
};
