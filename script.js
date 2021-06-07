// Requisito 1
const header = document.getElementsByTagName('header')[0];
const createTitle = document.createElement('h1');
header.appendChild(createTitle);
const title = document.querySelector('h1');
title.innerText = 'Minha Lista de Tarefas';

// Requisito 2
const paragraph1 = document.createElement('p');
title.appendChild(paragraph1);
paragraph1.id = 'funcionamento';
paragraph1.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Requisito 3
const input1 = document.createElement('input');
const section0 = document.querySelector('section');
section0.appendChild(input1);
input1.id = 'texto-tarefa';
input1.type = 'text';

// Requisito 5
// criar o button
const button1 = document.createElement('button');
section0.appendChild(button1);
button1.id = 'criar-tarefa';
button1.innerText = 'criar tarefa';
// fazer com que ao clicar no botao oq estiver no input va para lista;
const myList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addTask() {
  const list = document.createElement('li');
  list.className = 'item-list';
  list.innerText = input.value;
  myList.appendChild(list);
  input.value = '';
}
button1.addEventListener('click', addTask);

// exercise 7 and 8
function changeColor(event) {
  const item1 = document.querySelector('.selected');
  if (item1 != null) {
    item1.style.backgroundColor = 'white';
    item1.classList.remove('selected');
  }
  const listItem = event.target;
  listItem.style.backgroundColor = 'rgb(128,128,128)';
  listItem.classList.add('selected');
}
myList.addEventListener('click', changeColor);

// exercise 8
function stripeItem(event) {
  const element = event.target;
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}
myList.addEventListener('dblclick', stripeItem);

// exercise 10
const main = document.getElementById('principal');
const clearButton = document.createElement('button');
clearButton.id = 'apaga-tudo';
main.appendChild(clearButton);
clearButton.innerText = 'limpar tudo';

function clearList() {
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
    localStorage.clear();
  }
}
document.getElementById('apaga-tudo').addEventListener('click', clearList);

// exercise 11
const removeFinish = document.createElement('button');
main.appendChild(removeFinish);
removeFinish.id = 'remover-finalizados';
removeFinish.innerText = 'remover finalizados';
function deleteFinish() {
  const classRemove = document.getElementsByClassName('completed');
  while (classRemove.length !== 0) {
    classRemove[0].remove();
  }
}
removeFinish.addEventListener('click', deleteFinish);
