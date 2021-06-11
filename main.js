// Adicionar título "Minha Lista de Tarefas" à minha lista em uma tag
const header = document.querySelector('#header');

const title = document.createElement('h2');
title.innerText = 'Minha Lista de Tarefas';

header.appendChild(title);

// Adicionar um pequeno parágrafo abaixo do título com id=funcionamento
const main = document.querySelector('#main');

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

main.appendChild(paragraph);

/* Adicione um input com o id="texto-tarefa" onde a pessoa usuária
poderá digitar o nome do item que deseja adicionar à lista */

// Adicionar uma lista ordenada de tarefas com o id="lista-tarefas"
const body = document.querySelector('body');
const input = document.querySelector('#texto-tarefa');

main.appendChild(input);

const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
body.appendChild(ol);

// Adicionar um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
// Criar botão
const taskButton = document.createElement('button');

taskButton.id = 'criar-tarefa';
taskButton.innerText = 'Add';
main.appendChild(taskButton);

// ao clicar no botão, cria-se um novo item à lista
// Ao clicar em um item da lista, alterna seu backgroundColor para 'rgb(128,128,128)'

function changeBackgroundColor(event) {
  const liSelected = document.querySelectorAll('li');  
  for (let index = 0; index < liSelected.length; index += 1) {
  liSelected[index].classList.remove('li-style');  
  }
  event.target.classList.add('li-style');
}

function addTask() {
  const taskItem = document.createElement('li');
  if (input.value !== '') {
  taskItem.innerText = input.value;
  ol.appendChild(taskItem);
}
  input.value = '';
  taskItem.addEventListener('click', changeBackgroundColor);
  taskItem.addEventListener('dblclick', taskCompleted);
}
taskButton.addEventListener('click', addTask);

// Requisito 9 - Ao clicar duas vezes no item, caso não esteja riscado, riscar, caso esteja, 'desriscar'

function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// Requisito 10 - Inserir um botão "apaga-tudo"
// criar button
let clearButton = document.createElement('button');
clearButton.id = "apaga-tudo";
clearButton.innerText = 'Limpar';
body.appendChild(clearButton);

function clearAllButton() {
const list = document.querySelector('#lista-tarefas');
list.innerHTML = '';
}

clearButton.addEventListener('click', clearAllButton);