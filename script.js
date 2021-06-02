function criaElemento(elemento) { // função pra criar elemento;
  const element = document.createElement(elemento);
  return element;
}
function listBackground(eventoDeOrigem) { // função para adicionar fundo a tarefa clicada;
  const list = document.querySelectorAll('.list');
  const evento = eventoDeOrigem.target;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === evento) {
      list[index].style.backgroundColor = ('rgb(128, 128, 128)');
    }
  }
}
function addEventListBackground() { // função para adicionar evento que ao clicar adiciona fundo usando a função anterior;
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', listBackground);
  }
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
}
const taskBtn = document.querySelector('#criar-tarefa');
taskBtn.addEventListener('click', taskSubmit); // evento que adiciona tarefa a lista;
