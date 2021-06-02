let ol = document.querySelector('#lista-tarefas');
let tarefa = document.querySelector('#criar-tarefa');


function criarTarefa(){
  let input = document.querySelector('#texto-tarefa').value;
  let createLi = document.createElement('li');
  ol.appendChild(createLi).innerText = input;
  if (input === input) {
    document.querySelector('#texto-tarefa').value = '';
  }
}

tarefa.addEventListener('click', criarTarefa)

function colorItem(event) {
  let selecionado = document.querySelector('.selected');
  if(selecionado) {
    selecionado.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

ol.addEventListener('click', colorItem)


function completedTask(event) {
  event.target.classList.add('completed')
}

function failTaks(event) {
  let selected = document.querySelector('.completed')
  if(selected) {
    selected.classList.remove('selected')
  }
}

ol.addEventListener('dblclick', completedTask)

