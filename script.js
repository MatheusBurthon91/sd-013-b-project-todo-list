const createButton = document.getElementById('criar-tarefa');
const eraseButton = document.getElementById('apaga-tudo');
const eraseCompletedButton = document.getElementById('remover-finalizados');

eraseCompletedButton.addEventListener('click', eraseCompleted);
eraseButton.addEventListener('click', eraseListItems);
createButton.addEventListener('click', createListItem);

function selectColor(element) {
  let selectedItem = document.getElementsByClassName('selected')[0]
  if (selectedItem !== undefined) {
    selectedItem.className = selectedItem.className.replace(' selected', '');
  }
  element.target.className += ' selected';
}

function complete(element) {
  if (element.target.className.includes('completed') === false) {
    element.target.className += ' completed';
  }
  else {
    element.target.className = element.target.className.replace(' completed', '');
  }
}

function createListItem(task) {
  task = document.querySelector('input').value;
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = 'item';
  listItem.addEventListener('click', selectColor);
  listItem.addEventListener('dblclick', complete);
  document.getElementById('lista-tarefa').appendChild(listItem);
  document.querySelector('input').value = '';
}

function eraseListItems() {
  let listOfTasks = document.getElementsByClassName('item');
  let numberOfItems = listOfTasks.length;
  for (let i = 0; i < numberOfItems; i += 1) {
    listOfTasks[0].remove();
  }
}

function eraseCompleted() {
  let completedTasks = document.getElementsByClassName('completed');
  let numberOfItems = completedTasks.length;
  for (let i = 0; i < numberOfItems; i += 1) {
    completedTasks[0].remove();
  }
}




