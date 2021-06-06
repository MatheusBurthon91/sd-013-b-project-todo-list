function createTask() {
  const taskList = document.getElementById('lista-tarefas'); 
  // const addTask = document.getElementById('criar-tarefa');
  const taskLine = document.createElement('li');
  taskLine.innerText = document.getElementById('texto-tarefa').value;
  taskLine.className = 'tarefas';
  taskList.appendChild(taskLine);
  document.getElementById('texto-tarefa').value = '';
} 
document.getElementById('criar-tarefa').addEventListener('click', createTask);
