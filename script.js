const taskInput = document.getElementById('texto-tarefa');
const list = document.createElement('ol');
list.id = 'task-list';
list.className = 'list';
document.body.appendChild(list);
const taskButton = document.createElement('button');;
taskButton.id = 'criar-tarefa';
taskButton.className = 'button';
taskButton.innerText = 'Adicionar tarefa';
document.body.appendChild(taskButton);
taskButton.addEventListener('click', addTask);
function addTask() {
  const listItem = document.createElement ('li');
  listItem.className = 'list-item';
  listItem.innerText = taskInput.value;
  list.appendChild (listItem);
  taskInput.value = '';
}