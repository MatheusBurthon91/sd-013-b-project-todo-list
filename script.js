function selecionarItem(itemEvento) {
  const selecionado = document.querySelector('.selecionado');
  const clicado = itemEvento.target;
  if (selecionado !== null) {
    selecionado.classList.remove('selecionado');
    clicado.classList.add('selecionado');
  } else {
    clicado.classList.add('selecionado');
  }
}

function tarefaCumprida(itemEvento) {
  const doisClicks = itemEvento.target;
  if (doisClicks.classList.contains('completed')) {
    doisClicks.classList.remove('completed');
  } else {
    doisClicks.classList.add('completed');
  }
}

function adicionarTarefa() {
  const lista = document.getElementById('lista-tarefas');
  const novoItem = document.createElement('li');
  const entrada = document.getElementById('texto-tarefa');
  novoItem.innerText = entrada.value;
  novoItem.addEventListener('click', selecionarItem);
  novoItem.addEventListener('dblclick', tarefaCumprida);
  lista.appendChild(novoItem);
  entrada.value = '';
}

const botaoCriar = document.getElementById('criar-tarefa');

botaoCriar.addEventListener('click', adicionarTarefa);
