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
  let choreClassVar = document.getElementsByClassName('choreClass')
  for (let index = 0; index < choreClassVar.length; index += 1){
    choreClassVar[index].classList.remove('choreClass');
  }
  if (selectItem.target.classList.contains('chores')){
    selectItem.target.classList.add('choreClass');
  }
}

// Adicionando evento para alterar a background color do item da lista de tarefa
const selectList = document.getElementById('lista-tarefas');
selectList.addEventListener('click', listItemColor);