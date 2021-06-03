const taskList = document.getElementById('lista-tarefas');

const saveTaskList = () => {
  const list = Array.from(taskList.children).map((li) => {
    const task = {
      name: li.textContent,
      pending: !li.classList.contains('completed'),
    };

    return task;
  });
  localStorage.removeItem('task-list');
  localStorage.setItem('task-list', JSON.stringify(list));
};

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

const createTask = (task) => {
  const li = document.createElement('li');
  li.addEventListener('click', selectItem);
  li.addEventListener('dblclick', completeTask);
  li.innerText = task.name;

  if (!task.pending) li.classList.add('completed');
  return li;
};

const setTaskList = () => {
  const list = JSON.parse(localStorage.getItem('task-list') || '[]');

  if (!list) return;
  list.forEach((task) => {
    const li = createTask(task);
    taskList.appendChild(li);
  });
};

const addTaskOnList = (event) => {
  event.preventDefault();

  const data = Array.from(event.target.children);
  const li = createTask({ name: data[0].value, pending: true });

  data[0].value = '';
  taskList.appendChild(li);
};

const deleteList = () => {
  Array.from(taskList.children).forEach((li) => li.remove());
};

const deleteCompleted = () => {
  Array.from(taskList.children).forEach((li) => {
    if (li.classList.contains('completed')) li.remove();
  });
};

document
  .getElementById('controle-inserir-tarefa')
  .addEventListener('submit', addTaskOnList);

document.getElementById('apaga-tudo').addEventListener('click', deleteList);

document
  .getElementById('remover-finalizados')
  .addEventListener('click', deleteCompleted);

document
  .getElementById('salvar-tarefas')
  .addEventListener('click', saveTaskList);

window.onload = () => setTaskList();
