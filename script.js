const taskInput = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas')
const Button = document.getElementById('criar-tarefa');

function addTask() {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerText = taskInput.value;
  list.appendChild(listItem);
  taskInput.value = '';
}
Button.addEventListener('click', addTask);
