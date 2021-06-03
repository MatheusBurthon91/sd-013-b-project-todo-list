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
const addButton = document.querySelector('#criar-tarefa');
addButton.innerText = 'Adicionar';

createElementID('ol', main, 'lista-tarefas');
const listT = document.querySelector('#lista-tarefas');

createElementID('div', main, 'button-list');
const buttonList = document.querySelector('#button-list');

createElementID('button', buttonList, 'apaga-tudo');
buttonList.firstElementChild.innerText = 'Apagar tudo';

createElementID('button', buttonList, 'remover-finalizados');
buttonList.firstElementChild.nextElementSibling.innerText = 'Apagar os finalizados';

createElementID('button', buttonList, 'salvar-tarefas');
buttonList.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Salvar';

createElementID('button', buttonList, 'reset-save');
document.querySelector('#reset-save').innerText = 'Apagar lista salva';

createElementID('button', buttonList, 'mover-cima');
document.querySelector('#mover-cima').innerText = 'Mover pra cima';

createElementID('button', buttonList, 'mover-baixo');
document.querySelector('#mover-baixo').innerText = 'Mover pra baixo';

createElementID('button', buttonList, 'remover-selecionado');
document.querySelector('#remover-selecionado').innerText = 'Remover selecionado';

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
      itens[index].classList.remove('selected');
    }
  }
}

// Adiciona background color nos list-item quando são clicados.
function listClickBg(e) {
  if (e.target.classList.contains('list-item')) {
    e.target.className += ' selected';
  }
}

// Adiciona e retira o text decoration line-through, quando clicado.
function listClickLine(e) {
  if (e.target.classList.contains('list-item')) {
    if (e.target.classList.contains('completed')) {
      e.target.className = 'list-item';
    } else {
      e.target.className += ' completed';
    }
  }
}

// Limpa a lista, quando o botão designado for clicado.
function clickClearList() {
  const listItem = listT.children;
  for (let index = listItem.length - 1; index <= listItem.length && index >= 0; index -= 1) {
    listT.removeChild(listItem[index]);
  }
}

// Limpa os item da lista que tem a class completed.
function clickClearCompleted() {
  const listItem = listT.children;
  for (let index = listItem.length - 1; index < listItem.length && index >= 0; index -= 1) {
    if (listItem[index].classList.contains('completed')) {
      listT.removeChild(listItem[index]);
    }
  }
}

// Salva as li no localStorage.
function clickSave() {
  localStorage.setItem('list', listT.innerHTML);
}

window.onload = function start() {
  // Checa se tem algo salvo no lacalStorage e se tiver aplica na pagina.
  const storageCheck = localStorage.getItem('list');
  if (storageCheck !== undefined) {
    listT.innerHTML = storageCheck;
  }
  // aprendi como salvar e aplicar o que foi salvo, neste link:
  // https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/
};

// Remove a entrada referente a key = 'list'.
function clickResetSave() {
  localStorage.removeItem('list');
}

// Move o item selecionado para a posição acima dele.
function clickUp() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    const save = selected.previousSibling;
    if (selected.previousSibling !== null) {
      listT.removeChild(selected.previousSibling);
      listT.insertBefore(save, selected.nextElementSibling);
    }
    // Aprendi sobre o insertBefore, neste link:
    // https://www.w3schools.com/jsref/met_node_insertbefore.asp
  }
}

// Move item salecionado para a posição abaixo dele.
function clickDown() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    const save = selected.nextElementSibling;
    if (selected.nextElementSibling !== null) {
      listT.removeChild(selected.nextElementSibling);
      listT.insertBefore(save, selected);
    }
  }
}

// Remove o item selecionado.
function removeSelected() {
  const list = listT.children;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      listT.removeChild(list[index]);
    }
  }
}

// Event Listener.
addButton.addEventListener('click', buttonClickAddList);

document.addEventListener('click', listClickResetBg);
document.addEventListener('click', listClickBg);
document.addEventListener('dblclick', listClickLine);

document.querySelector('#apaga-tudo').addEventListener('click', clickClearList);

document.querySelector('#remover-finalizados').addEventListener('click', clickClearCompleted);

document.querySelector('#salvar-tarefas').addEventListener('click', clickSave);
document.querySelector('#reset-save').addEventListener('click', clickResetSave);

document.querySelector('#mover-cima').addEventListener('click', clickUp);
document.querySelector('#mover-baixo').addEventListener('click', clickDown);

document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);
