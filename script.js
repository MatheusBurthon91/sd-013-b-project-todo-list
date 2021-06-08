const ol = document.querySelector('#lista-tarefas');
const tarefa = document.querySelector('#criar-tarefa');
const apaga = document.querySelector('#apaga-tudo');
const finalizados = document.querySelector('#remover-finalizados');
const salvarTarefa = document.querySelector('#salvar-tarefas');
const moverCima = document.querySelector('#mover-cima');
const moverBaixo = document.querySelector('#mover-baixo');
const removerTarefa = document.querySelector('#remover-selecionado')


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


function removerFinalizados() {
  let finali = document.querySelectorAll('.completed')

  for (let i = 0; i < finali.length; i += 1) {
    ol.removeChild(finali[i]);
  }
}

finalizados.addEventListener('click', removerFinalizados)


const tarefas = JSON.parse(localStorage.getItem('lista-tarefas'));

function salvarLista() {
  let lista = document.querySelectorAll('#lista-tarefas li')
  console.log(lista)
  localStorage.setItem('lista-tarefas', JSON.stringify(tarefas));
}

salvarTarefa.addEventListener('click', salvarLista)


function moveup() {
  let element = document.querySelector('.selected');
  if(element.previousElementSibling) {
    element.parentNode.insertBefore(element, element.previousElementSibling);
  }
}

function movedown() {
  let element = document.querySelector('.selected');
  if(element.nextElementSibling) {
    element.parentNode.insertBefore(element.nextElementSibling, element);
  }
}

moverCima.addEventListener('click', moveup)
moverBaixo.addEventListener('click', movedown)


function removeTask() {
  let selected = document.querySelector('.selected')
  if(selected.parentNode) {
    selected.parentNode.removeChild(selected);
  }
}

removerTarefa.addEventListener('click', removeTask);




