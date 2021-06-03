function selecionarItem(itemEvento) {
  const selecionado = document.querySelector('.selecionado');
  const clicado = itemEvento.target;
  if (selecionado !== null) {
    selecionado.className = '';
    clicado.className = 'selecionado';
  } else {
    clicado.className = 'selecionado';
  }
}

function adicionarTarefa() {
  const lista = document.getElementById('lista-tarefas');
  const novoItem = document.createElement('li');
  const entrada = document.getElementById('texto-tarefa');
  novoItem.innerText = entrada.value;
  novoItem.addEventListener('click', selecionarItem);
  lista.appendChild(novoItem);
  entrada.value = '';
}

const botaoCriar = document.getElementById('criar-tarefa');

botaoCriar.addEventListener('click', adicionarTarefa);
