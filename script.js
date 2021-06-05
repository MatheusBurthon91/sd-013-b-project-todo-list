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
divButtons.appendChild(listAddButton);
function clickListCheck(event) {
  const clickedItem = event.target;
  const selectedItem = document.querySelector('.selected');
  
  // se não houver item selecionado, adicionar classe selected ao item clicado
  if (selectedItem === null){
    clickedItem.classList.add('selected');
  } else {
    selectedItem.classList.remove('selected');
    clickedItem.classList.add('selected');
  }
  // e se ele não é nulo? tirar de onde estar e passar pro próximo clicado.

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
    orderList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
  });
}
addItem();
