const taskList = document.getElementById('lista-tarefas');

const selectItem = (event) => {
  const itemToSelect = event.target;
  Array.from(taskList.children).forEach((li) => {
    if (li.classList.contains('selected') && li !== itemToSelect) {
      li.classList.remove('selected');
    }
  });

  itemToSelect.classList.add('selected');
};

const completeTask = (event) => {
  const task = event.target;
  task.classList.toggle('completed');
};

const createTask = (taskName) => {
  const li = document.createElement('li');
  li.addEventListener('click', selectItem);
  li.addEventListener('dblclick', completeTask);
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

const deleteList = () => {
  Array.from(taskList.children).forEach((li) => li.remove());
  saveTaskList();
};

const deleteCompleted = () => {
  Array.from(taskList.children).forEach((li) => {
    if (li.classList.contains('completed')) li.remove();
  });

  saveTaskList();
};

document
  .getElementById('controle-inserir-tarefa')
  .addEventListener('submit', addTaskOnList);

document.getElementById('apaga-tudo').addEventListener('click', deleteList);

document
  .getElementById('remover-finalizados')
  .addEventListener('click', deleteCompleted);

window.onload = () => setTaskList();
