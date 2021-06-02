function criaElemento(elemento) { // função pra criar elemento;
  const element = document.createElement(elemento);
  return element;
}
function listBackground(eventoDeOrigem) { // função para adicionar fundo a tarefa clicada;
  const list = document.querySelectorAll('.list');
  const evento = eventoDeOrigem.target;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] !== evento) {
      list[index].classList.remove('selected');
    } else {
      list[index].classList.add('selected');
    }
  }
}
function addEventListBackground() { // função para adicionar evento que ao clicar adiciona fundo usando a função anterior;
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', listBackground);
  }
}
function listSublinha(eventoDeOrigem) { // essa função ao ser chamada adiciona ou remove a classe completed;
  const list = document.querySelectorAll('.list');
  const evento = eventoDeOrigem.target;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === evento) {
      list[index].classList.toggle('completed');
    }
  }
}
function addEventListSublinha() { // essa função adiciona evento que sublinha, chamando a função anterior;
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('dblclick', listSublinha);
  }
}
function clearALl() { // essa função ao ser chamada limpa todas as tarefas da lista;
  const lista = document.querySelector('#lista-tarefas');
  lista.innerHTML = '';
}
function addEventClear() { // essa função adiciona evento de apagar todas as tarefas, chamando a função anterior;
  const elemento = document.querySelector('#apaga-tudo');
  elemento.addEventListener('click', clearALl);
}
function clearFinished() { // essa função ao ser chamada limpa todas as tarefas concluídas da lista;
  const lista = document.querySelectorAll('.completed');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].parentNode.removeChild(lista[index]);
  }
}
function addEventClearFinished() { // essa função adiciona evento de apagar todas as tarefas concluídas, chamando a função anterior;
  const elemento = document.querySelector('#remover-finalizados');
  elemento.addEventListener('click', clearFinished);
}
function listSaved() {
  let object = {
    tasks: document.querySelector('#lista-tarefas').innerHTML,
  };
  localStorage.setItem('tasks', object.tasks);
}
function addEventSaved() {
  const elemento = document.querySelector('#salvar-tarefas');
  elemento.addEventListener('click', listSaved);
}
function addElementsSaved() {
  const tasks = localStorage.getItem('tasks');
  document.querySelector('#lista-tarefas').innerHTML = tasks;
}
function taskSubmit() { // função que adiciona o elemento com o valor do input, e chama a função anterior para adicionar evento que muda o fundo;
  const taskValue = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newElement = criaElemento('li');
  newElement.innerText = taskValue;
  newElement.classList = 'list';
  list.appendChild(newElement);
  document.querySelector('#texto-tarefa').value = '';
  addEventListBackground();
  addEventListSublinha();
  addEventClear();
  addEventClearFinished();
  addEventSaved();
}
const taskBtn = document.querySelector('#criar-tarefa');
taskBtn.addEventListener('click', taskSubmit); // evento que adiciona tarefa a lista;
addElementsSaved();