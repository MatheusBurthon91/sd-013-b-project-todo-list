function createNewTask(text, id) {
  const task = document.createElement('li');
  task.innerText = text;
  task.id = id;

  return task;
}

function addButtonEventListener() {
  const addTaskButton = document.querySelector('#criar-tarefa');

  addTaskButton.addEventListener('click', (event) => {
    event.preventDefault();

    const textInput = document.querySelector('#texto-tarefa');

    if (textInput.value) {
      const taskList = document.querySelector('#lista-tarefas');

      taskList.appendChild(
        createNewTask(textInput.value, `task${taskList.children.length}`),
      );
      textInput.value = '';
    } else {
      alert('Sua tarefa precisa ter um texto descritivo!');
    }
  });
}

window.onload = () => {
  addButtonEventListener();
};
