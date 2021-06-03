const taskList = document.getElementById('lista-tarefas');

const changeBGColor = (event) => {
  const li = event.target;
  li.style.backgroundColor = 'rgb(128, 128, 128)';
};

const createTask = (taskName) => {
  const li = document.createElement('li');
  li.addEventListener('click', changeBGColor);
  li.innerText = taskName;
  return li;
};

const saveTaskList = () => {
  const list = Array.from(taskList.children).map((li) => li.textContent);
  localStorage.removeItem('task-list');
  localStorage.setItem('task-list', list);
};

const setTaskList = () => {
  const list = localStorage.getItem('task-list');

  if (!list) return;
  list.split(',').forEach((task) => {
    const li = createTask(task);
    taskList.appendChild(li);
  });
};

const addTaskOnList = (event) => {
  event.preventDefault();

  const data = Array.from(event.target.children);
  const li = createTask(data[0].value);

  data[0].value = '';
  taskList.appendChild(li);
  saveTaskList();
};

document
  .getElementById('controle-inserir-tarefa')
  .addEventListener('submit', addTaskOnList);

window.onload = () => setTaskList();
