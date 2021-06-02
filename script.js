//requisito 2
function makeParagraph() {
  const elementFather = document.body;
  const paragraph = document.createElement('p');
  paragraph.innerText ='Clique duas vezes em um item para marcá-lo como completo';
  paragraph.id = 'funcionamento';
  elementFather.appendChild(paragraph);
}

makeParagraph();

//requisito 3
function createInputElement() {
  const elementFather = document.body;
  const inputList = document.createElement('input');
  inputList.id = 'texto-tarefa';
  elementFather.appendChild(inputList);
}

createInputElement();

//requisito 4
function createOrderedList() {
  const elementFather = document.body;
  const orderedList = document.createElement('ol');
  orderedList.id = 'lista-tarefas';
  elementFather.appendChild(orderedList);
}

createOrderedList();

//requisito 5
function createButton() {
  const elementFather = document.body;
  const buttonAdd = document.createElement('button');
  buttonAdd.id = 'criar-tarefa';
  buttonAdd.innerText = 'Adicionar';
  elementFather.appendChild(buttonAdd);
}

createButton();

function addAssignment() {
  const list = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.innerText = input.value;
  list.appendChild(itemList);
  input.value = '';
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click',addAssignment);

