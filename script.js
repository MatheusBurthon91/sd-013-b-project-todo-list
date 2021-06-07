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
let selectList = document.getElementById('lista-tarefas');
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
  }
}

// Evendo para clicar no botão de remover tarefas completas
const clickDoneItems = document.getElementById('remover-finalizados');
clickDoneItems.addEventListener('click', removeCompleted);

// Função para remover o item selecionado
function removeSelected() {
  let listItems = document.querySelectorAll('#lista-tarefas li');
  let list = document.getElementById('lista-tarefas');
  for (let index = 0; index < listItems.length; index += 1){
    if(listItems[index].classList.contains('choreClass')){
      list.removeChild(listItems[index]);
    }
  }
}

// Evento para clicar no botão e remover a tarefa selecionada
const clickSelectedItems = document.getElementById('remover-selecionado');
clickSelectedItems.addEventListener('click', removeSelected);

// Função para mover o item para cima
function moveUp() {
  let listItems = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItems.length; index += 1){
    if (listItems[0].classList.contains('choreClass')) {
      break;
    } else if(listItems[index].classList.contains('choreClass')){
      const saveItem = listItems[index].innerHTML;
      listItems[index].innerHTML = listItems[index - 1].innerHTML;
      listItems[index - 1].innerHTML = saveItem;
      listItems[index].classList.remove('choreClass');
      listItems[index - 1].classList.add('choreClass');
    }
  }
}

// Evento para clicar no botão e mover a tarefa para cima
const moveSelectedItemUp = document.getElementById('mover-cima');
moveSelectedItemUp.addEventListener('click', moveUp);

// Função para mover item para baixo
function moveDown() {
  let listItems = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItems.length; index += 1){
    if (listItems[listItems.length -1].classList.contains('choreClass')) {
      break;
    } else if(listItems[index].classList.contains('choreClass')){
      const saveItem = listItems[index + 1].innerHTML;
      listItems[index + 1].innerHTML = listItems[index].innerHTML;
      listItems[index].innerHTML = saveItem;
      listItems[index].classList.remove('choreClass');
      listItems[index + 1].classList.add('choreClass');
      return
    }
  }
}

// Evento para clicar no botão e mover a tarefa para baixo
const moveSelectedItemDown = document.getElementById('mover-baixo');
moveSelectedItemDown.addEventListener('click', moveDown);

// Função para salvar a lista
function saveList() {
  let list = document.querySelectorAll('li');
  let items = [];
  let complete = [];
  for (let index = 0; index < list.length; index += 1){
    items.push(list[index].innerText);
    if (list[index].classList.contains('completed') === true) {
      complete.push(index);
    }
  }
  localStorage.setItem('items',JSON.stringify(items));
  localStorage.setItem('complete', JSON.stringify(complete));
}

const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', saveList);

// Função para carregar a lista
function loadList() {
  let items = localStorage.getItem('items');
  if (items !== null && items.length > 0) {
    items = JSON.parse(items);
    const complete = JSON.parse(localStorage.getItem('complete'));
    items.forEach((value, index) => {
      const listItem = document.createElement('li');
      if (complete.indexOf(index) !== -1) {
        listItem.className = 'completed';
      }
      listItem.innerText = value;
      selectList.appendChild(listItem);
    })
  }
}

window.onload = loadList();