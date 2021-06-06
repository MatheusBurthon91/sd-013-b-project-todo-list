const header = document.createElement('header');
document.body.appendChild(header);
const titleHeader = document.createElement('h1');
titleHeader.innerHTML = 'Minha Lista de Tarefas';
header.appendChild(titleHeader);
header.style.textAlign = 'center';
header.style.color = 'red';
const paragraphHeader = document.createElement('p');
paragraphHeader.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(paragraphHeader);
paragraphHeader.style.color = 'green';
paragraphHeader.id = 'funcionamento';
const inputSection = document.createElement('section');
document.body.appendChild(inputSection);
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('value', '');
input.style.marginLeft = '30px';
inputSection.appendChild(input);
input.id = 'texto-tarefa';
const todoListDiv = document.createElement('div');
document.body.appendChild(todoListDiv);
const todoList = document.createElement('ol');
todoListDiv.appendChild(todoList);
todoList.id = 'lista-tarefas';
const divButtons = document.createElement('div');
document.body.appendChild(divButtons);
const listAddButton = document.createElement('button');
listAddButton.id = 'criar-tarefa';
listAddButton.innerText = 'Adicionar tarefa';
listAddButton.style.marginLeft = '30px';
const listDeleteAllButton = document.createElement('button');
listDeleteAllButton.id = 'apaga-tudo';
listDeleteAllButton.innerText = 'Apagar TODAS as tarefas';
listDeleteAllButton.style.marginLeft = '30px';
const listDeleteSelectedButton = document.createElement('button');
listDeleteSelectedButton.id = 'remover-finalizados';
listDeleteSelectedButton.innerText = 'Apagar as tarefas selecionadas';
listDeleteSelectedButton.style.marginLeft = '30px';
divButtons.appendChild(listAddButton);
divButtons.appendChild(listDeleteAllButton);
divButtons.appendChild(listDeleteSelectedButton);
function clickListCheck(event) {
  // cumprido com auxílio do estudante Lucas Caribé, gente fina, contratem ele também.
  const clickedItem = event.target;
  const selectedItem = document.querySelector('.selected');
  // se não houver item selecionado, adicionar classe selected ao item clicado
  if (selectedItem === null) {
    clickedItem.classList.add('selected');
    // e se ele não é nulo? tirar de onde está e passar pro próximo clicado.
  } else {
    selectedItem.classList.remove('selected');
    clickedItem.classList.add('selected');
  }
}

function doubleClickedItem(event) {
  const doubleClickedItemList = event.target;
  doubleClickedItemList.classList.toggle('completed');
}

function addItem() {
  const orderList = document.querySelector('#lista-tarefas');
  const taskButton = document.querySelector('#criar-tarefa');
  // desafio cumprido com auxílio de estudos do w3Scholl,
  // uso de input e valores;
  taskButton.addEventListener('click', (event) => {
    const inputId = document.getElementById('texto-tarefa').value;
    const listItem = document.createElement('li');
    listItem.innerText = inputId;
    listItem.classList = 'list-itens';
    listItem.addEventListener('click', clickListCheck);
    listItem.addEventListener('dblclick', doubleClickedItem);
    orderList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  });
}
addItem();

function removeItems(event) {
  const clearAllButton = document.querySelector('#apaga-tudo');
  clearAllButton.addEventListener('click', (event) => {
    document.getElementById('lista-tarefas').innerHTML = '';
  });
}
removeItems();

function removeSelectedItems(event) {
  const clearDoneButton = document.querySelector('#remover-finalizados');
  clearDoneButton.addEventListener('click', (event) => {
    const listMarkedItems = document.querySelectorAll('.completed');
    if (listMarkedItems !== null) {
      for (let index = 0; index < listMarkedItems.length; index += 1) {
        listMarkedItems[index].remove();
      }
    }
  });
}
removeSelectedItems();

