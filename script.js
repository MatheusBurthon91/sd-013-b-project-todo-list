const botaoAdi = document.querySelector('#criar-tarefa');
const textTarefa = document.querySelector('#texto-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');

function adicionarTarefa() {
  let input = textTarefa.value;
  let li = document.createElement('li');
  listaTarefa.appendChild(li);
  li.innerText = input;
  textTarefa.value = '';
}

botaoAdi.addEventListener('click', adicionarTarefa);
