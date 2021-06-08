let ol = document.querySelector('#lista-tarefas');
let tarefa = document.querySelector('#criar-tarefa');
let apaga = document.querySelector('#apaga-tudo');
let finalizados = document.querySelector('#remover-finalizados');
let salvarTarefa = document.querySelector('#salvar-tarefas');
let moverCima = document.querySelector('#mover-cima');
let moverBaixo = document.querySelector('#mover-baixo');


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





