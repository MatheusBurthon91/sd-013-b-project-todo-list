function adicionarItem() {
  let itemList = document.createElement("li");
  let texto = document.createTextNode(document.getElementById("texto-tarefa").value);
  itemList.appendChild(texto);
  criaObjetoClicável(itemList);
  document.getElementById('lista-tarefas').appendChild(itemList);
  document.getElementById("texto-tarefa").value = '';
}

function criaObjetoClicável(objeto) {
  objeto.addEventListener('click', selecao);
}

function selecao(objeto) {
  elemento = objeto.target;
  elemento.classList.toggle('selecionado');
}