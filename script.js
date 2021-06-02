function adicionarTarefas() {
  const pegarTextoTarefas = document.querySelector('#texto-tarefa');
  const pegarListaTarefa = document.querySelector('#lista-tarefas');

  const novaLista = document.createElement('li');
  novaLista.innerText = pegarTextoTarefas.value;
  pegarListaTarefa.appendChild(novaLista);
  pegarTextoTarefas.value = '';
}

const pegarCriarTarefas = document.querySelector('#criar-tarefa');
pegarCriarTarefas.addEventListener('click', adicionarTarefas);

function oneSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
const pegarListaTarefa = document.querySelector('#lista-tarefas');
pegarListaTarefa.addEventListener('click', (event) => {
  const evento = event;
  evento.target.style.background = 'rgb(128, 128, 128)';
});
const novaLista = document.createElement('li');
novaLista.addEventListener('click', oneSelected);
