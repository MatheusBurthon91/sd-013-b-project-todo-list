const input = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa')
criarTarefa.addEventListener('click', () => {
  const listaTarefa = document.createElement('li');
  listaOrdenada.appendChild(listaTarefa);
  listaTarefa.innerHTML = input.value;
});

const listaTarefa = document.getElementsByTagName('li');

listaTarefa.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
});

