const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

function createItem() {
  const input = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  ol.appendChild(li);
  li.appendChild(document.createTextNode(input));
}

button.addEventListener('click', createItem);
