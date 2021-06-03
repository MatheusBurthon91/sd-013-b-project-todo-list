window.onload = loadSavedList();
const taskButton = document.querySelector('#criar-tarefa');
const addTask = document.querySelector('#texto-tarefa');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseFinishedButton = document.querySelector('#remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas')
const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const selectDelButton = document.querySelector('#remover-selecionado');

// Imprime a lista salva e configura os eventlisteners
function loadSavedList(){
  let savedTaskList = localStorage.getItem('saveList')
  savedTaskList = JSON.parse(savedTaskList)
  if(savedTaskList !== null){
    let listContainer = document.getElementById('lista-tarefas')
    for(let index5 in savedTaskList){
      let savedItem = document.createElement('li')
      savedItem.addEventListener('click', changeBackground)
      savedItem.addEventListener('dblclick', changeText)
      savedItem.className = savedTaskList[index5].class
      savedItem.innerText = savedTaskList[index5].text
      listContainer.appendChild(savedItem);
    }
    removeSelectedClass('selected');
  }
}

// Criação da Função que remove o background de todas as listas.
function removeBackground() {
  const listOfLists = document.querySelectorAll('.toDoTask');
  for (const index1 of listOfLists) {
    
    index1.style.backgroundColor = '';
  }
}
// Adcionar um EventListener no botão que salva a lista no localStorage.
saveListButton.addEventListener('click', saveOnLocalStorage);


function removeSelectedClass(classToRemove){
  const listToRemove = document.querySelectorAll('.'+classToRemove)
  for (let index6 of  listToRemove) {
    index6.classList.remove(classToRemove);
  }
}

// Criação da Função que torna o Background do item selecionado cinza e adciona a classe selected a penas a esse item.
function changeBackground(event1) {
  removeBackground();
  removeSelectedClass('selected');
  event1.target.classList.add('selected');
  event1.target.style.backgroundColor = 'rgb(128,128,128)';
}

// Cria função responsável por adcionar e remover a classe que risca o texto
function changeText(event2) {
  event2.target.classList.toggle('completed');
}

// Adciona EventListener no botão que ao ser clicado
function addListItem() {
  const newTask = document.createElement('li');
  if (addTask.value !== '') {
    newTask.innerText = addTask.value;
    document.querySelector('#lista-tarefas').appendChild(newTask);
    newTask.className = 'toDoTask';
    newTask.addEventListener('click', changeBackground);
    newTask.addEventListener('dblclick', changeText);
    addTask.value = '';
  }
}
taskButton.addEventListener('click', addListItem);

// Cria a função que apaga lista
function eraseList(){ 
  let listToErase = document.getElementsByClassName('toDoTask');
  localStorage.removeItem('saveList')
  for (let index2 = listToErase.length - 1; index2 >= 0; index2 -= 1) {
    listToErase[index2].remove();
  }
}

// Adciona o event listener ao butão que apaga tudo.
eraseButton.addEventListener('click', eraseList)

// Cria a função que apaga a lista de tarefas finalizadas.
function eraseFinishedList(){ 
  let finishedListToErase = document.getElementsByClassName('completed');
  for (let index3 = finishedListToErase.length - 1; index3 >= 0; index3 -= 1) {
    finishedListToErase[index3].remove();
  }
}

// Adciona o event listener ao butão que apaga as tarefas finalizadas.
eraseFinishedButton.addEventListener('click', eraseFinishedList)

//Cria a função que salva as listas no localStorage.
function saveOnLocalStorage() {
  let saveList = document.querySelectorAll('.toDoTask');
  let obj = {};
  for (let index4 = 0; index4 < saveList.length; index4 += 1) {
    obj[index4] = {'class':saveList[index4].className, 'text': saveList[index4].innerText};
  }
  localStorage.setItem('saveList', JSON.stringify(obj));

}
// Insere EventListener no botão mover para cima e cria Função que move item selecionado para a cima.
function moveUp(){
  const itemToMove1 = document.querySelector('.selected');
  if (itemToMove1 !== null) {
    if ( itemToMove1.previousElementSibling) {
      itemToMove1.parentNode.insertBefore(itemToMove1, itemToMove1.previousElementSibling);
    }
  }
}
moveUpButton.addEventListener('click', moveUp);

// Insere EventListener no botão mover para baixo e cria Função que move item selecionado para a baixo.
function moveDown(){
  const itemToMove2 = document.querySelector('.selected');
  console.log(itemToMove2);
  if (itemToMove2 !== null){
    if (itemToMove2.nextElementSibling) {
      itemToMove2.parentNode.insertBefore(itemToMove2.nextElementSibling, itemToMove2);
    }
  }
}
moveDownButton.addEventListener('click', moveDown);

// Adciona EventListener ao botão Remover Selecionado e Função que Remove apenas o Item selecionado.
function removeSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}
selectDelButton.addEventListener('click', removeSelectedItem);