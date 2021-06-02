const button = document.querySelector('#criar-tarefa');

function setTask() {
  const input = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerText = input.value;
  input.value = '';
  const lista = document.querySelector('#lista-tarefas');
  lista.appendChild(item);
}

button.addEventListener('click', setTask);
