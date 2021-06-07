// 5
let button = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas');

function criaIl() {
  let novaTarefa = document.createElement('li');
  novaTarefa.textContent = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  ol.appendChild(novaTarefa)
}

button.addEventListener('click', criaIl)
