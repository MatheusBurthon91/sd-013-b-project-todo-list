let ol = document.querySelector('#lista-tarefas');
let tarefa = document.querySelector('#criar-tarefa');
let apaga = document.querySelector('#apaga-tudo');


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
  event.target.classList.toggle('completed')
}

function removeCompleted(event) {
  let completed = document.querySelector('.completed')
  completed.classList.t('completed');
}

ol.addEventListener('dblclick', completedTask)
//ol.addEventListener('dblclick', removeCompleted)

function apagarTudo() {
  ol.innerText = '';
}

apaga.addEventListener('click', apagarTudo)

