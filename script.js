const taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
let listItem;

function listMaker() {
  const inputText = taskInput.value;
  listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerText = inputText;
  taskList.appendChild(listItem);
  taskInput.value = '';
}

taskButton.addEventListener('click', listMaker);

function selectedItem(event) {
  const liArray = document.getElementsByTagName('li');
  for (let index = 0; index < liArray.length; index += 1) {
    if (event.target.classList.contains('task')) {
      if (liArray[index].classList.contains('selected')) {
        liArray[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  }
  event.target.classList.add('selected');
}

taskList.addEventListener('click', selectedItem);
