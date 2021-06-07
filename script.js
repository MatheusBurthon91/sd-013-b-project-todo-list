// 5
let botao = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas');

function criaIl() {
  let novaTarefa = document.createElement('li');
  novaTarefa.textContent = document.querySelector('#texto-tarefa').value;
  document.querySelector('#texto-tarefa').value = '';
  ol.appendChild(novaTarefa)
}
botao.addEventListener('click', criaIl)

// 7

let item = document.querySelector('#lista-tarefas');

function changeColor(event) {
  if (event.target.tagName === 'LI') {
    let gray = event.target;
    gray.classList.add('cinza');
  }
}
item.addEventListener('click', changeColor);
