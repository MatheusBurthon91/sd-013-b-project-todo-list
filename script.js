function selecao(objeto) {
  let elemento = objeto.target;
  let lista = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < lista.length; index += 1) {
    //if (lista[index].classList.contains('selecionado') && elemento !== lista[index]) {
      lista[index].classList.remove('selecionado');
    //}
  }
  elemento.classList.toggle('selecionado');
}

function criaObjetoClicavel(objeto) {
  objeto.addEventListener('click', selecao);
}

function adicionarItem() {
  let itemList = document.createElement('li');
  let texto = document.createTextNode(document.getElementById('texto-tarefa').value);
  itemList.appendChild(texto);
  criaObjetoClicavel(itemList);
  document.getElementById('lista-tarefas').appendChild(itemList);
  document.getElementById('texto-tarefa').value = '';
}
