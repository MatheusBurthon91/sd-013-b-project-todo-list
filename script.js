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
