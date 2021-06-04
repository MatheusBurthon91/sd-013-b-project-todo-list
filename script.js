const list = document.querySelector('#lista-tarefas');

function addList() {
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  list.appendChild(task);
  document.querySelector('#texto-tarefa').value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addList);

function addBackground(event) {
  if (document.querySelector('#selected')) {
    document.querySelector('#selected').removeAttribute('id');
  }
  const selectedList = event.target;
  selectedList.setAttribute('id', 'selected');
}

function taskCompleted(event) {
  const selected = event.target;
  if (selected.className === 'completed') selected.classList.remove('completed');
  else selected.classList.add('completed');
}

list.addEventListener('dblclick', taskCompleted);
list.addEventListener('click', addBackground);

function eraseAll() {
  list.innerHTML = '';
}

document.querySelector('#apaga-tudo').addEventListener('click', eraseAll);

function eraseCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    if (completed[index].className === 'completed') completed[index].remove();
  }
}

document.querySelector('#remover-finalizados').addEventListener('click', eraseCompleted);

function saveList() {
  localStorage.setItem('savedList', list.innerHTML);
}
function retrieveList() {
  list.innerHTML = localStorage.getItem('savedList');
}

retrieveList();

document.querySelector('#salvar-tarefas').addEventListener('click', saveList);

function moveDown() {
  const selected = document.querySelector('#selected');
  if (selected === null || selected.nextSibling === null) return false;
  const siblingText = selected.nextSibling.innerText;
  const sibling = selected.nextSibling;
  selected.nextSibling.innerText = selected.innerText;
  selected.innerText = siblingText;
  selected.removeAttribute('id');
  sibling.setAttribute('id', 'selected');
}

function moveUp() {
  const selected = document.querySelector('#selected');
  if (selected === null || selected.previousSibling === null) return false;
  const siblingText = selected.previousSibling.innerText;
  const sibling = selected.previousSibling;
  selected.previousSibling.innerText = selected.innerText;
  selected.innerText = siblingText;
  selected.removeAttribute('id');
  sibling.setAttribute('id', 'selected');
}

function removeSelected() {
  if (document.querySelector('#selected')) document.querySelector('#selected').remove();
  return false;
}

document.querySelector('#remover-selecionado').addEventListener('click', removeSelected);

document.querySelector('#mover-cima').addEventListener('click', moveUp);

document.querySelector('#mover-baixo').addEventListener('click', moveDown);
