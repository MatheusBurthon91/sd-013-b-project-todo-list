// Adicionar título "Minha Lista de Tarefas" à minha lista em uma tag
const header = document.querySelector('#header');

const title = document.createElement('h2');
title.innerText = 'Minha Lista de Tarefas';

header.appendChild(title);

// Adicionar um pequeno parágrafo abaixo do título com id=funcionamento
const p = document.createElement('p');
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
p.id = 'funcionamento';

title.appendChild('p');