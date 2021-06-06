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

// Função para riscar o texto das tarefas cumpridas
function riskChore(event) {
  const selectedChore = event;
  if (selectedChore.target.classList.contains('completed')) {
    selectedChore.target.classList.remove('completed');
    return;
  }
  if (selectedChore.target.classList.contains('chores')) {
    selectedChore.target.classList.add('completed');
  }
}

// Adicionando evento para riscar
selectList.addEventListener('dblclick', riskChore);

// Função para apagar toda a lista
function clearChoreList() {
  const clearChores = document.getElementById('lista-tarefas');
  clearChores.innerHTML = '';
}

// Adiciona o evento ao clicar no botão limpar lista
const clickClearButton = document.getElementById('apaga-tudo');
clickClearButton.addEventListener('click', clearChoreList);

// Função para remover os itens finalizados
function removeCompleted() {
  let listItems = document.querySelectorAll('#lista-tarefas li');
  let list = document.getElementById('lista-tarefas');
  for (let index = 0; index < listItems.length; index += 1){
    if (listItems[index].classList.contains('completed')){
      list.removeChild(listItems[index]);
    }
    console.log(listItems[index])
  }
}

const clickDoneItems = document.getElementById('remover-finalizados');
clickDoneItems.addEventListener('click', removeCompleted);