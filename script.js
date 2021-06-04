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
input.setAttribute ('type', 'text');
input.setAttribute ('value', '');
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
function addItem() {
  const orderList = document.querySelector('#lista-tarefas');
  console.log(orderList);
  const taskButton = document.querySelector('#criar-tarefa');
  // desafio cumprido com auxílio de estudos do w3Scholl, 
  // uso de input e valores.
  taskButton.addEventListener('click', (event) => {
    let inputId = document.getElementById('texto-tarefa').value;
    let listItem = document.createElement('li');
    event.preventDefault();
    listItem.innerText = inputId;
    orderList.appendChild(listItem);
    if (listItem.innerText === inputId){
      inputId[0].value.replace = '';
    } 
  });

}
addItem();
