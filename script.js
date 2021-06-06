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
const listDeleteCompletedButton = document.createElement('button');
listDeleteCompletedButton.id = 'remover-finalizados';
listDeleteCompletedButton.innerText = 'Apagar as tarefas concluídas';
listDeleteCompletedButton.style.marginLeft = '30px';
const saveTasksButton = document.createElement('button');
saveTasksButton.id = 'salvar-tarefas';
saveTasksButton.innerText = 'Salve sua lista de tarefas ^^';
saveTasksButton.style.marginLeft = '30px';
const listDeleteSelectedButton = document.createElement('button');
listDeleteSelectedButton.innerText = 'Apagar as tarefas selecionadas';
listDeleteSelectedButton.id = 'remover-selecionado';
listDeleteSelectedButton.style.marginLeft = '30px';
listDeleteSelectedButton.style.marginTop = '15px';
const listItemUpButton = document.createElement('button');
listItemUpButton.id = 'mover-cima';
listItemUpButton.innerText = 'Mover item para cima';
listItemUpButton.style.marginLeft = '30px';
listItemUpButton.style.marginTop = '15px';
const listItemDownButton = document.createElement('button');
listItemDownButton.id = 'mover-baixo';
listItemDownButton.innerText = 'Mover item para baixo';
listItemDownButton.style.marginLeft = '30px';
listItemDownButton.style.marginTop = '15px';
divButtons.appendChild(listAddButton);
divButtons.appendChild(listDeleteAllButton);
divButtons.appendChild(listDeleteCompletedButton);
divButtons.appendChild(saveTasksButton);
divButtons.appendChild(listDeleteSelectedButton);
divButtons.appendChild(listItemUpButton);
divButtons.appendChild(listItemDownButton);

function getSaveListItems() {
  // cumprido com auxílio do estudante Lucas Caribé, gente fina, contratem ele também.
  const savedItems = JSON.parse(localStorage.getItem('My-todo-list'));
  if (savedItems === null) {
    return;
  }
  // colocar na li o que está salvo no meu localStorage;
  for (let index = 0; index < savedItems.length; index += 1) {
    const savedItemsIntoList = document.createElement('li');
    savedItemsIntoList.classList = savedItems[index].class;
    savedItemsIntoList.innerText = savedItems[index].textContent;
    todoList.appendChild(savedItemsIntoList);
  }
}
getSaveListItems();

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

function removeCompletedItems(event) {
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
removeCompletedItems();

function saveListToObject() {
  const listItems = document.getElementsByTagName('li');
  const todoListSaveTasks = [];
  for (let index = 0; index < listItems.length; index += 1) {
    const infoListObject = {
      class: listItems[index].className,
      textContent: listItems[index].innerText,
    };
    todoListSaveTasks.push(infoListObject);
  }
  return todoListSaveTasks;
}

function saveTaskEventListener(event) {
  // cumprido com auxílio do estudante Lucas Caribé e Lucas T França,.
  // gente fina, contratem ele também.  
  saveTasksButton.addEventListener('click', () => {
    const listToObject = saveListToObject();
    // pego o valor que eu quero e salvo no local storage, transformo em string
    // salvei um trecho, que é o "texto - innerHTML".
    localStorage.setItem('My-todo-list', JSON.stringify(listToObject));
  });
}
saveTaskEventListener();

function removeSelectedItems(event) {
  const clearDoneButton = document.querySelector('#remover-selecionado');
  clearDoneButton.addEventListener('click', (event) => {
    const listSelectedItems = document.querySelectorAll('.selected');
    if (listSelectedItems !== null) {
      for (let index = 0; index < listSelectedItems.length; index += 1) {
        listSelectedItems[index].remove();
      }
    }
  });
}
removeSelectedItems();