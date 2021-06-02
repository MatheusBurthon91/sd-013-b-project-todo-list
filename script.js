// Função do botão input-task.
const orderedList = document.getElementsByTagName('ol')[0];
function inputTask() {
  const listItem = document.createElement('li');
  const texto = document.getElementById('texto-tarefa').value;
  listItem.innerText = texto;
  orderedList.appendChild(listItem);
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', inputTask);
