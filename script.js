const taskInput = document.getElementById('texto-tarefa');
const list = document.createElement('ol');
list.id = 'lista-tarefas';
list.className = 'list';
document.body.appendChild(list);
const taskButton = document.createElement('button');;
taskButton.id = 'criar-tarefa';
taskButton.className = 'button';
taskButton.innerText = 'Adicionar tarefa';
document.body.appendChild(taskButton);
taskButton.addEventListener('click', addTask);

function addTask() {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerText = taskInput.value;
  list.appendChild(listItem);
  taskInput.value = '';
  updateListItens();
}

const listItens = document.getElementsByClassName('list-item');

function updateListItens() {
  for (listElements of listItens) {
    listElements.addEventListener('click', changeBackgrondColor);
  }
}

function changeBackgrondColor(event) {
  for (listElements of listItens) {
    if (listElements.className.includes ('selected')) {
      listElements.className = 'list-item';
      listElements.style.backgroundColor = 'white';
    }
  }
  event.target.className += ' selected';
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}