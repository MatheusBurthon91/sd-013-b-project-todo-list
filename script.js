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

// Criação de tags.
createElementID('button', main, 'criar-tarefa');
const button = document.querySelector('#criar-tarefa');
button.innerText = 'Adicionar';

createElementID('ol', main, 'lista-tarefas');
const listT = document.querySelector('#lista-tarefas');

// Adiciona o texto do input a lista e limpa a caixa de texto.
function buttonClickAddList() {
  const inputValue = input.value;
  CreateElementClass('li', listT, 'list-item');
  listT.lastChild.innerText = inputValue;
  input.value = '';
}

// Reseta a cor do background dos list-item quando são clicados.
function listClickResetBg(e) {
  const itens = listT.children;
  if (e.target.classList.contains('list-item')) {
    for (let index = 0; index < itens.length; index += 1) {
      itens[index].style.backgroundColor = 'white';
    }
  }
}

// Adiciona background color nos list-item quando são clicados.
function listClickBg(e) {
  if (e.target.classList.contains('list-item')) {
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

// Adiciona e retira o text decoretion line-through, quando clicado.
function listClickLine(e) {
  if (e.target.classList.contains('list-item')) {
    if (e.target.classList.contains('completed')) {
      e.target.className = 'list-item';
    } else {
      e.target.className += ' completed';
    }
  }
}

// Event Listener.
button.addEventListener('click', buttonClickAddList);

document.addEventListener('click', listClickResetBg);
document.addEventListener('click', listClickBg);

document.addEventListener('dblclick', listClickLine);
