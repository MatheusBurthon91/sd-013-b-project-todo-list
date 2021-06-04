function controlFunc() {
  saveContent();
  createItemList();
  clearContent();
}

function clearContent() {
  document.getElementById("texto-tarefa").value = '';
}

function saveContent() {
  let text = document.getElementById("texto-tarefa").value;
  return text;
}

function createItemList() {
  let itemList = document.createElement("li");
  let content =  document.getElementById("texto-tarefa").value;
  let item = document.createTextNode(content);
  itemList.appendChild(item);
  document.getElementById("lista-tarefas").appendChild(itemList);
}

