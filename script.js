let itemLista;
let tarefa;
let textoTarefa;
let isSelected;
let isComplete;
let listaSelect = document.querySelector('#lista-tarefas');
const lista = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');

function addToList() {
  tarefa = document.getElementById('texto-tarefa').value;
  textoTarefa = document.createTextNode(tarefa);
  itemLista = document.createElement('li');
  itemLista.classList.add('list');
  lista.appendChild(itemLista);
  itemLista.appendChild(textoTarefa);
  document.getElementById('texto-tarefa').value = ('');
}

botao.addEventListener('click', addToList);

function colorBackground(event) {
  const clicado = event.target;
  isSelected = document.querySelector('.listBackground');
  if (clicado.id !== 'lista-tarefas') {
    if (isSelected === null) {
      clicado.classList.toggle('listBackground');
    } else {
      isSelected.classList.toggle('listBackground');
      clicado.classList.toggle('listBackground');
    }
  }
}

listaSelect.addEventListener('click', colorBackground);

function completeTask(event){
  const clicado = event.target;
  isComplete = document.querySelector('.completed');
  if (clicado.id !== 'lista-tarefas') {
    clicado.classList.toggle('completed');
  }
}

listaSelect.addEventListener('dblclick', completeTask)
