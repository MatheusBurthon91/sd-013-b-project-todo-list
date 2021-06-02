const h1 = document.createElement('h1');

const HeaderSelect = document.querySelector('header').appendChild(h1);

const divFunction = document.body.children[1];

const inputSelect = document.querySelector('input');

const olSelect = document.querySelector('ol');

h1.innerText = 'Minha Lista de Tarefas';

divFunction.setAttribute('id', 'funcionamento');

document.getElementById('funcionamento').innerText = 'Clique duas vezes em um item para marcá-lo como completo'

inputSelect.setAttribute('id', 'texto-tarefa');

olSelect.setAttribute('id', 'lista-tarefas');
