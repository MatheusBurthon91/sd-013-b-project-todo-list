const ListaTarefas = 'lista-tarefas';

function selecao(objeto) {
  let elemento = objeto.target;
  let lista = document.getElementById(ListaTarefas).children;
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].classList.remove('selecionado');
  }
  elemento.classList.toggle('selecionado');
}

function completo(objeto) {
  let elemento = objeto.target;
  elemento.classList.toggle('completed');
}

function criaObjetoClicavel(objeto) {
  objeto.addEventListener('click', selecao);
  objeto.addEventListener('dblclick', completo);
}

function adicionarItem() {
  let itemList = document.createElement('li');
  itemList.className = 'item';
  let texto = document.createTextNode(document.getElementById('texto-tarefa').value);
  itemList.appendChild(texto);
  criaObjetoClicavel(itemList);
  document.getElementById(ListaTarefas).appendChild(itemList);
  document.getElementById('texto-tarefa').value = '';
}

function limparLista() {
  document.getElementById(ListaTarefas).innerHTML = '';
}

function removerFinalizados() {
  let lista = document.querySelectorAll('.item');
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].classList.contains('completed')) lista[index].remove();
  }
}

function salvar() {
  //document.getElementById('lista-tarefas');
}
