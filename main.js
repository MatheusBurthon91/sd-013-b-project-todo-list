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

const ol = document.createElement('ol');
