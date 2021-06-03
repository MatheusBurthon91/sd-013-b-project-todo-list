const inputText = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const olTaskList = document.getElementById('lista-tarefas');

function createTask() {
  const task = inputText.nodeValue;
  const li = document.createElement('li');
  li.innerText = task;
  olTaskList.appendChild(li);
}

btnCreateTask.addEventListener('click', createTask);
