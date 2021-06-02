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
//   if(selected !== null){
//     selected.classList.remove('selected'); 
//   } else {
//     event.target.style.backgroundColor = 'rgb(128,128,128)';
//     event.target.classList.add('selected');
//   }
}   

function addAssignment() {
  const list = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const itemList = document.createElement('li');
  itemList.addEventListener('click',setBackGroundColor);
  itemList.innerText = input.value;
  itemList.className = 'item';
  list.appendChild(itemList);
  input.value = '';
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click',addAssignment);
