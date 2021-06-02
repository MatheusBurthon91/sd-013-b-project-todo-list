const main = document.querySelector('#principal');
const input = document.querySelector('#texto-tarefa');

// Cria tags e define ID.
function createElementID(type, father, idName) {
  const tag = document.createElement(type);
  tag.id = idName;
  father.appendChild(tag);
}

// Cria tags e define a classe.
function CreateElementClass(type, father, classN) {
  const tag = document.createElement(type);
  tag.className = classN;
  father.appendChild(tag);
}

// Limpa a caixa de texto do input.
function buttonClickClear() {
  input.value = '';
}

// Adiciona o texto do input a lista.
function buttonClickAddList() {
  const inputValue = input.value;
  CreateElementClass('li', document.querySelector('#lista-tarefas'), 'list-item');
  document.querySelector('#lista-tarefas').lastChild.innerText = inputValue;
}

function listClick(e) {
  if (e.target.classList.contains('list-item')) {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

// Criação de tags.

createElementID('button', main, 'criar-tarefa');
const button = document.querySelector('#criar-tarefa');
button.innerText = 'Adicionar';

createElementID('ol', main, 'lista-tarefas');

// Event Listener.
button.addEventListener('click', buttonClickAddList);
button.addEventListener('click', buttonClickClear);

document.addEventListener('click', listClick);
