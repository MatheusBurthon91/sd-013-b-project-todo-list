// Requisito 1
let header = document.getElementsByTagName('header')[0];
let createTitle = document.createElement('h1');
header.appendChild(createTitle);
let title = document.querySelector('h1');
title.innerText = 'Minha Lista de Tarefas';

// Requisito 2
let paragraph1 = document.createElement('p');
title.appendChild(paragraph1);
paragraph1.id = 'funcionamento'
paragraph1.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// Requisito 3
let input1 = document.createElement('input');
let section0 = document.querySelector('section');
section0.appendChild(input1);
input1.id = 'texto-tarefa';

