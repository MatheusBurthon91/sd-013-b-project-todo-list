// FUNÇÕES PARA AS TAREFAS DA LISTA
function selecionarItem(itemEvento) {
  // eslint-disable-next-line sonarjs/no-duplicate-string
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

// FUNÇÕES PARA OS BOTÕES
const lista = document.getElementById('lista-tarefas');

function adicionarTarefa() {
  const entrada = document.getElementById('texto-tarefa');
  const novoItem = document.createElement('li');
  novoItem.innerText = entrada.value;
  novoItem.addEventListener('click', selecionarItem);
  novoItem.addEventListener('dblclick', tarefaCumprida);
  lista.appendChild(novoItem);
  entrada.value = '';
}

function apagarSelecionado() {
  const selecionados = document.getElementsByClassName('selecionado');
  selecionados[0].parentNode.removeChild(selecionados[0]);
}

function apagarCompletos() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados.length > 0) {
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
}

function apagarTudo() {
  lista.innerHTML = '';
}

function moverCima() {
  const selecionado = document.querySelector('.selecionado');
  if (selecionado.previousElementSibling) {
    selecionado.parentNode.insertBefore(selecionado, selecionado.previousSibling);
  }
}

function moverBaixo() {
  const selecionado = document.querySelector('.selecionado');
  if (selecionado.nextElementSibling) {
    selecionado.parentNode.insertBefore(selecionado, selecionado.nextSibling.nextSibling);
  }
}

function salvarTarefas() {
  // Nesta função precisei pesquisar por ajuda já que não estava sendo possível salvar
  // os itens da lista de forma satisfatória no localStorage.
  // Encontrei o método com 'stringfy' em https://projects.raspberrypi.org/
  const tarefasSalvas = [];

  for (let index = 0; index < lista.children.length; index += 1) {
    const tarefa = lista.children.item(index);
    const objetoTarefa = {
      tarefa: tarefa.innerText,
      completa: tarefa.classList.contains('completed'),
    };

    tarefasSalvas.push(objetoTarefa);
  }
  localStorage.setItem('tarefasSalvas', JSON.stringify(tarefasSalvas));
}

function recriarTarefas(item, completa) {
  const recriar = document.createElement('li');
  recriar.innerText = item;
  recriar.addEventListener('click', selecionarItem);
  recriar.addEventListener('dblclick', tarefaCumprida);
  if (completa) {
    recriar.classList.add('completed');
  }
  lista.appendChild(recriar);
}

// FUNÇAO PARA O INÍCIO DA SESSÃO CASO TENHA SIDO USADO O BOTÃO SALVAR
window.onload = function recriarLista() {
  if (localStorage.getItem('tarefasSalvas') !== null) {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefasSalvas'));

    for (let index = 0; index < tarefasSalvas.length; index += 1) {
      const salva = tarefasSalvas[index];

      recriarTarefas(salva.tarefa, salva.completa);
    }
  }
};

// BOTÕES
const botaoCriar = document.getElementById('criar-tarefa');
const botaoApagarSelecionado = document.getElementById('remover-selecionado');
const botaoApagarCompletos = document.getElementById('remover-finalizados');
const botaoApagarTudo = document.getElementById('apaga-tudo');
const botaoCima = document.getElementById('mover-cima');
const botaoBaixo = document.getElementById('mover-baixo');
const botaoSalvar = document.getElementById('salvar-tarefas');

botaoCriar.addEventListener('click', adicionarTarefa);
botaoApagarSelecionado.addEventListener('click', apagarSelecionado);
botaoApagarCompletos.addEventListener('click', apagarCompletos);
botaoApagarTudo.addEventListener('click', apagarTudo);
botaoCima.addEventListener('click', moverCima);
botaoBaixo.addEventListener('click', moverBaixo);
botaoSalvar.addEventListener('click', salvarTarefas);
