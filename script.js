const taskList = document.getElementById('lista-tarefas');

const saveTaskList = () => {
  const list = Array.from(taskList.children).map((li) => li.textContent);
  localStorage.removeItem('task-list');
  localStorage.setItem('task-list', list);
};

const setTaskList = () => {
  const list = localStorage.getItem('task-list');

  if (!list) return;
  list.split(',').forEach((task) => {
    const li = document.createElement('li');
    li.innerText = task;
    taskList.appendChild(li);
  });
};

const addTaskOnList = (event) => {
  event.preventDefault();

  const data = Array.from(event.target.children);
  const li = document.createElement('li');

  li.innerText = data[0].value;
  data[0].value = '';
  taskList.appendChild(li);
  saveTaskList();
};

document
  .getElementById('controle-inserir-tarefa')
  .addEventListener('submit', addTaskOnList);

window.onload = () => setTaskList();
