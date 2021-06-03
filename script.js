let itemLista;
let tarefa;
let textoTarefa;
const lista = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');
let listaSelect = document.querySelector('#lista-tarefas');

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

function pintaFundo(event) {
  let clicado = event.target;
  if (clicado.id != 'lista-tarefas'){
    clicado.classList.toggle('listBackground');
  }
}
listaSelect.addEventListener('click', pintaFundo);