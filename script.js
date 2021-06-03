let inputStorage;
const createButton = document.getElementById('criar-tarefa');

function inputPickUp() {
  inputStorage = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const listIten = document.createElement('li');
  listIten.innerText = inputStorage;
  list.appendChild(listIten);
  document.getElementById('texto-tarefa').value = '';
}

createButton.addEventListener('click', inputPickUp);
