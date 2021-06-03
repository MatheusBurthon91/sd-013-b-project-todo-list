// Funcão de adicionar a tarefa à lista
function addChore(){
  let chore = document.getElementById('texto-tarefa').value;
  let newListItem = document.createElement('li');
  let choreList = document.getElementById('lista-tarefas');
  newListItem.innerText = chore;
  choreList.appendChild(newListItem);
  document.getElementById('texto-tarefa').value = '';
}

let clickButton = document.getElementById('criar-tarefa');
clickButton.addEventListener('click', addChore);