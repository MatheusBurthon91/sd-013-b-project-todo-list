let ol = document.querySelector('#lista-tarefas');
let tarefa = document.querySelector('#criar-tarefa');


function criarTarefa(){
  let input = document.querySelector('#texto-tarefa').value;
  let createLi = document.createElement('li');
  ol.appendChild(createLi).innerText = input
  if (input === input) {
    document.querySelector('#texto-tarefa').value = null;
  }
}

tarefa.addEventListener('click', criarTarefa)


