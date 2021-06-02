let ol = document.querySelector('#lista-tarefas');
let tarefa = document.querySelector('#criar-tarefa');


function criarTarefa(){
  let input = document.querySelector('#texto-tarefa').value;
  let createLi = document.createElement('li');
  ol.appendChild(createLi).innerText = input;
  if (input === input) {
    document.querySelector('#texto-tarefa').value = null;
  }
}

tarefa.addEventListener('click', criarTarefa)

function colorItem() {
  let listadeTaks = document.querySelectorAll("#lista-tarefas li");
  for (let i = 0; i < listadeTaks.length; i += 1) {
    listadeTaks[i].style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

ol.addEventListener('click', colorItem)
