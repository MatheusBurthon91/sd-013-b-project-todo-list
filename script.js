function createTask() {
  const taskList = document.getElementById('lista-tarefas');
  const taskLine = document.createElement('li');
  taskLine.innerText = document.getElementById('texto-tarefa').value;
  taskLine.className = 'tarefas';
  taskList.appendChild(taskLine);
  document.getElementById('texto-tarefa').value = '';
}
document.getElementById('criar-tarefa').addEventListener('click', createTask);

const list = document.getElementById('lista-tarefas');

function changeColor(event) {
  const tasks = document.querySelectorAll('li');

  for (let index = 0; index < tasks.length; index += 1) {

    if (tasks[index] === event.target) {
      event.target.classList.add('selected');
    } else {
      tasks[index].classList.remove('selected');
    }
  }
}
list.addEventListener('click', changeColor);

function completeTask(event) {
  event.target.classList.toggle('completed');
}
list.addEventListener('dblclick', completeTask);
