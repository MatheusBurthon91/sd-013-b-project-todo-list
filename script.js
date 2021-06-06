// INCLUI UM ITEM NA LISTA
let botaoCria = document.querySelector('#criar-tarefa');
botaoCria.addEventListener('click', input);

let lista = document.querySelector('#lista-tarefas');

function input (){
  
  let item = document.createElement('li');
  lista.appendChild(item);
  item.className = 'pintar';
  let input = document.querySelector('#texto-tarefa');
  let valor = input.value;
  item.innerHTML = valor;
  input.value = '';
}
// -----------------------------------------------------------

// 8 - SELECIONA UM ITEM DA LISTA / FUNDO CINZA
lista.addEventListener('click', click);

function click(event) {

  let selecItem = document.querySelector('.cinza');
  
  if (event.target.classList.contains('pintar')) {
    
      event.target.classList.add('cinza');

      if (selecItem) {
        selecItem.classList.remove('cinza');
      }
  }
}
// ------------------------------------------------------------

// 9 - DOUBLE CLICK RISCA O ITEM DA LISTA 

lista.addEventListener('dblclick', risca);

function risca(event) {

  if (event.target.classList.contains('completed')) {
    
    event.target.classList.remove('completed');
  }
  else {
    event.target.classList.add('completed');
  }
}
// ------------------------------------------------------------

// 10 - LIMPA LISTA
let botaoLimpa = document.getElementById('apaga-tudo');

botaoLimpa.addEventListener('click', apagaLista);

function apagaLista (){

  let listaTarefa = document.querySelector('#lista-tarefas');
  listaTarefa.innerHTML = '';

  //REMOVENDO USANDO (WHILE)
  // let child = lista.lastElementChild;
  // while (child) {
  //   lista.removeChild(child);
  //   child = lista.lastElementChild;
  // }
}

