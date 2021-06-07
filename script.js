const botao = document.querySelector('#criar-tarefa');
const entradaDeTexto = document.querySelector('#texto-tarefa');
const getClick = document.getElementById('conteudo-lista');
const clearAll = document.querySelector('#apaga-tudo');
const rmIndividual = document.querySelector('#remover-finalizados');
const sList = document.querySelector('#salvar-tarefas');

// Resgata o que foi escrito na caixa de texto
function criaTarefa() {
  const texto = document.querySelector('#texto-tarefa').value;
  return texto;
}

// Adiciona o Item na lista.
function adicionaLista() {
  const addlist = document.querySelector('#lista-tarefas');
  const text = entradaDeTexto;
  if (criaTarefa() !== '') {
    const lista = document.createElement('li');
    lista.innerText = criaTarefa();
    lista.classList.add('itensLista');
    addlist.appendChild(lista);
    text.value = '';
  }
  text.value = '';
}

// Remove os itens selecionados
function removeclass() {
  const getSelected = document.querySelector('.selected');
  if (getSelected != null) {
    getSelected.classList.remove('selected');
  }
}

// Seleciona os itens pelo click do mouse
getClick.addEventListener('click', (haveClick) => {
  removeclass();
  if (haveClick.target.classList.contains('itensLista')) {
    haveClick.target.classList.add('selected');
  }
}, false);

// Marca como completo o item que foi clicado duas vezes
getClick.addEventListener('dblclick', (clicks) => {
  const clicked = clicks.target;
  if (clicked.classList.contains('itensLista')) {
    if (clicked.classList.contains('completed')) {
      clicked.classList.remove('completed');
    } else {
      clicked.classList.add('completed');
    }
  }
}, false);

// limpa toda a lista de tarefas
clearAll.addEventListener('click', () => {
  const listToRm = document.getElementById('lista-tarefas');
  listToRm.innerHTML = '';
  // for (let index = 0; index < listToRm.length; index += 1) {
  //   listToRm[index].parentNode.removeChild(listToRm[index]);
  // }
});

// remove os itens que estão marcados como feitos
function remComplete() {
  const remove = document.querySelectorAll('.completed');
  for (let index = 0; index < remove.length; index += 1) {
    const rm = remove[index];
    rm.parentNode.removeChild(rm);
  }
}

function saveList() {
  const getListItens = document.querySelector('#lista-tarefas');
  const teste = JSON.stringify(getListItens.innerHTML);
  localStorage.setItem('completeList', teste);
}
window.onload = () => {
  const getOl = document.getElementById('lista-tarefas');
  const content = JSON.parse(localStorage.getItem('completeList'));
  getOl.innerHTML = content;
};

sList.addEventListener('click', saveList);
rmIndividual.addEventListener('click', remComplete);
entradaDeTexto.addEventListener('change', criaTarefa);
botao.addEventListener('click', adicionaLista);
// referências
// A referência para criar a função 'clearAll.addEventListener' foi retirada deste site https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
// E também https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Houveram algumas refatorações de partes do código, e estas mesmas foram elaboradas durante os plantões. Agradecimentos ao Panta e Baêta!
