function addList() {
  const list = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  list.appendChild(task);
  document.querySelector('#texto-tarefa').value = '';
}

function appendList() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addList);
}

appendList();
