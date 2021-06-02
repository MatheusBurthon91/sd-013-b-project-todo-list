// Requisito 1
let header = document.createElement('header');
document.body.appendChild(header);

let title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);

// Requisito 2
let paragrafo = document.createElement('p');
paragrafo.id = 'funcionamento';
paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(paragrafo);