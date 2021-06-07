const botao = document.querySelector('#criar-tarefa');
const entradaDeTexto = document.querySelector('#texto-tarefa');
const getClick = document.getElementById('conteudo-lista');
const clearAll = document.querySelector('#apaga-tudo');

function criaTarefa() {
  const texto = document.querySelector('#texto-tarefa').value;
  return texto;
}

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

function removeclass() {
  const getItem = document.querySelectorAll('.itensLista');
  for (let indexR = 0; indexR < getItem.length; indexR += 1) {
    getItem[indexR].classList.remove('selected');
  }
}

getClick.addEventListener('click', (haveClick) => {
  removeclass();
  if (haveClick.target.classList.contains('itensLista')) {
    haveClick.target.classList.add('selected');
  }
}, false);

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

function rmAll(){
  const listToRm = document.querySelectorAll('.itensLista');
  for(let starts = 0; starts < listToRm.length; starts += 1 ) {
    listToRm[starts].parentNode.removeChild(listToRm[starts]);
  }
}

clearAll.addEventListener('click', rmAll);
entradaDeTexto.addEventListener('change', criaTarefa);
botao.addEventListener('click', adicionaLista);
