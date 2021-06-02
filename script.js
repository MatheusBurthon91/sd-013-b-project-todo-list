const taskButton = document.querySelector('#criar-tarefa');
const addTask = document.querySelector('#texto-tarefa');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseFinishedButton = document.querySelector('#remover-finalizados');

// Criação da Função que remove o background de todas as listas.
function removeBackground() {
  const listOfLists = document.querySelectorAll('.toDoTask');
  for (const index1 of listOfLists) {
    index1.style.backgroundColor = '';
  }
}

// Criação da Função que torna o Background do item selecionado cinza.
function changeBackground(event1) {
  removeBackground();
  event1.target.style.backgroundColor = 'rgb(128,128,128)';
}
// Cria função responsável por adcionar e remover a classe que risca o texto
function changeText(event2) {
  event2.target.classList.toggle('completed');
}

// Adciona EventListener no butão que ao ser clicado
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

