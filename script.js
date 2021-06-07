// Adicionar título "Minha Lista de Tarefas" à minha lista em uma tag
const header = document.querySelector('#header');

const title = document.createElement('h2');
title.innerText = 'Minha Lista de Tarefas';

header.appendChild(title);

