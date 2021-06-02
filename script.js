function adicionarItem() {
  let itemList = document.createElement("li");
  let texto = document.createTextNode(document.getElementById("texto-tarefa").value);
  itemList.appendChild(texto);
  document.getElementById('lista-tarefas').appendChild(itemList);
  document.getElementById("texto-tarefa").value = '';
}