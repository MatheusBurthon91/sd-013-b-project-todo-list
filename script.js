// FUNÇÕES PARA AS TAREFAS DA LISTA
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
  doisClicks.classList.toggle('completed');
}
const lista = document.getElementById('lista-tarefas');

// FUNÇÕES PARA OS BOTÕES
function adicionarTarefa() {
  const novoItem = document.createElement('li');
  const entrada = document.getElementById('texto-tarefa');
  novoItem.innerText = entrada.value;
  novoItem.addEventListener('click', selecionarItem);
  novoItem.addEventListener('dblclick', tarefaCumprida);
  lista.appendChild(novoItem);
  entrada.value = '';
}

function apagarTudo() {
  lista.innerHTML = '';
}

function apagarFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados.length > 0) {
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
}

// BOTÕES
const botaoCriar = document.getElementById('criar-tarefa');
const botaoApagarTudo = document.getElementById('apaga-tudo');
const botaoFinalizar = document.getElementById('remover-finalizados');

botaoCriar.addEventListener('click', adicionarTarefa);
botaoApagarTudo.addEventListener('click', apagarTudo);
botaoFinalizar.addEventListener('click', apagarFinalizados);