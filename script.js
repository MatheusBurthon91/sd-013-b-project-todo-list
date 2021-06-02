// 4
const taskInput = document.getElementById('texto-tarefa');
const list = document.createElement('ol');
list.id = 'lista-tarefas';
list.className = 'list';
document.body.appendChild(list);
// 5 & 6
const taskButton = document.createElement('button');;
taskButton.id = 'criar-tarefa';
taskButton.className = 'button';
taskButton.innerText = 'Adicionar tarefa';
document.body.appendChild(taskButton);
// 7 & 8
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
    listElements.addEventListener('dblclick', changeCompleted);
  }
}

function changeBackgrondColor(event) {
  for (listElements of listItens) {
    if (listElements.className.includes('selected')) {
      listElements.classList.remove('selected');
      listElements.style.backgroundColor = 'white';
    }
  }
  event.target.className += ' selected';
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

// 9
function changeCompleted(event) {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  }
  else {
    event.target.className += ' completed';
  }
}

//10
const clearButton = document.createElement('button');
clearButton.id = 'apaga-tudo';
clearButton.innerText = 'Limpar lista';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', clearList);

function clearList () {
  while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
  } 
}
