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
  if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
  else {
    event.target.style.backgroundColor = 'white';
  }
}

function addTask() {
  const taskItem = document.createElement('li');
  taskItem.className = 'li-style';
  taskItem.innerText = input.value;
  ol.appendChild(taskItem);
  input.value = '';
  ol.addEventListener('click', changeBackgroundColor);
}
taskButton.addEventListener('click', addTask);


