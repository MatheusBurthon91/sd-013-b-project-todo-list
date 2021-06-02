const taskInput = document.getElementById('texto-tarefa');
const list = document.createElement('ol');
const taskButton = document.createElement('button');
const listItens = document.getElementsByClassName('list-item');
const clearCompletedButton = document.createElement('button');
const clearButton = document.createElement('button');

function changeBackgrondColor(event) {
  for (const listElements of listItens) {
    if (listElements.className.includes('selected')) {
      listElements.classList.remove('selected');
      listElements.style.backgroundColor = 'white';
    }
  }
  event.target.className += ' selected';
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

function changeCompleted(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.className += ' completed';
  }
}

function updateListItens() {
  for (const listElements of listItens) {
    listElements.addEventListener('click', changeBackgrondColor);
    listElements.addEventListener('dblclick', changeCompleted);
  }
}

function addTask() {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerText = taskInput.value;
  list.appendChild(listItem);
  taskInput.value = '';
  updateListItens();
}

function clearList() {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function clearCompleted() {
  const completedItens = document.getElementsByClassName('completed');
  while (completedItens.length > 0) {
    completedItens[0].remove();
  }
}

list.id = 'lista-tarefas';
list.className = 'list';
document.body.appendChild(list);
taskButton.id = 'criar-tarefa';
taskButton.className = 'button';
taskButton.innerText = 'Adicionar tarefa';
document.body.appendChild(taskButton);
taskButton.addEventListener('click', addTask);
clearButton.id = 'apaga-tudo';
clearButton.innerText = 'Limpar lista';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', clearList);
clearCompletedButton.id = 'remover-finalizados';
clearCompletedButton.innerText = 'Remover itens finalizados';
document.body.appendChild(clearCompletedButton);
clearCompletedButton.addEventListener('click', clearCompleted);
