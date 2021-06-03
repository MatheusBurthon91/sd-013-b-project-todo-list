// Funcão de adicionar a tarefa à lista
function addChore(){
  let chore = document.getElementById('texto-tarefa').value;
  let newListItem = document.createElement('li');
  let choreList = document.getElementById('lista-tarefas');
  newListItem.innerText = chore;
  choreList.appendChild(newListItem);
  newListItem.classList.add('chores');
  document.getElementById('texto-tarefa').value = '';
}

// Evento de clicar no botão para adicionar a tarefa
let clickButton = document.getElementById('criar-tarefa');
clickButton.addEventListener('click', addChore);

// Função para alterar o fundo dos itens da lista para rgb(128,128,128);
function listItemColor(event) {
  const selectItem = event;
  if (selectItem.target.classList.contains('chores')){
    selectItem.target.style.backgroundColor = 'rgb(128,128,128)';
  }
}

const selectList = document.getElementById('lista-tarefas');
selectList.addEventListener('click', listItemColor);