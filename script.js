let inputStorage;
const createButton = document.getElementById('criar-tarefa');

function inputPickUp() {
  inputStorage = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const listIten = document.createElement('li');
  listIten.innerText = inputStorage;
  list.appendChild(listIten);
  document.getElementById('texto-tarefa').value = '';
}

createButton.addEventListener('click', inputPickUp);

let toDoList = [];

function classSelected(event) {
  if (document.querySelector('.selected') === null) {
    const e = event;
    document.querySelectorAll('li')[[].indexOf.call(toDoList, e.target)].classList.add('selected');
  } else {
    document.querySelector('.selected').classList.remove('selected');
    const e = event;
    document.querySelectorAll('li')[[].indexOf.call(toDoList, e.target)].classList.add('selected');
  }
}

function storeLiNodes() {
  toDoList = document.querySelectorAll('li');
  for (let index = 0; index < toDoList.length; index += 1) {
    toDoList[index].addEventListener('click', classSelected);
  }
  console.log(toDoList);
}

createButton.addEventListener('click', storeLiNodes);
