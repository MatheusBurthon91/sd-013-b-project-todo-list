let itemLista;
let tarefa;
let textoTarefa;
let lista = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');

function addToList(){
  tarefa = document.getElementById('texto-tarefa').value;
  textoTarefa = document.createTextNode(tarefa);
  itemLista = document.createElement('li')
  lista.appendChild(itemLista);
  itemLista.appendChild(textoTarefa);
  document.getElementById('texto-tarefa').value = ('');
}

botao.addEventListener('click', addToList);
