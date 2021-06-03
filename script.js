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
//função para selecionar item clicado e mudar bg
function setBackGroundColor(event) {
  const itemList = document.querySelectorAll('.item');
  for(index = 0; index < itemList.length; index += 1) {
    if(itemList[index].className.includes('selected') === true) {
      itemList[index].classList.remove('selected');
      itemList[index].style.backgroundColor = 'white';        
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
    event.target.classList.add('selected');
  }
}   
//função para riscar tarefas cumpridas
function actionCompleted(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}
//função para adcionar tarefas
function addAssignment() {
  const list = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.addEventListener('click',setBackGroundColor);
  itemList.addEventListener('dblclick',actionCompleted);
  itemList.innerText = input.value;
  itemList.className = 'item';
  list.appendChild(itemList);
  input.value = '';
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click',addAssignment);
//função para apagar toda a lista
function clearList() {
  const elementFather = document.getElementsByTagName('ol')[0];
  const itemList = document.querySelectorAll('.item');
  for(let index = 0; index < itemList.length; index += 1) {
    elementFather.removeChild(itemList[index]);
  } 
}
//Criando Botão Apagar Lista
const elementFather = document.body;
const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'Apagar Lista';
buttonClear.style.marginLeft = '10px';
buttonClear.addEventListener('click', clearList);
elementFather.appendChild(buttonClear);
//função que apaga os itens da lista marcados como finalizados
function clearFinished() {
  const elementFather = document.querySelector('#lista-tarefas');  
  const listFinished = document.querySelectorAll('.completed');
  for(let index = 0; index < listFinished.length; index += 1) {
      elementFather.removeChild(listFinished[index]);
  }  
}

//Criando Botão Apaga tarefas finalizadas
const buttonClearFinished = document.createElement('button');
buttonClearFinished.id ='remover-finalizados';
buttonClearFinished.innerText = 'Apaga Tarefas Finalizadas';
buttonClearFinished.style.marginLeft = '10px';
buttonClearFinished.addEventListener('click',clearFinished);
elementFather.appendChild(buttonClearFinished);

