let listaTarefas = document.querySelector('#lista-tarefas');
let tarefaInput = document.querySelector('#texto-tarefa');

let buttonTarefa = document.querySelector('#criar-tarefa');


buttonTarefa.addEventListener('click', criaTarefa);

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;
};

