const buttonText = document.getElementById('criar-tarefa');
const listItem = document.getElementsByTagName('li');
const eraseAllBtn = document.getElementById('apaga-tudo');
const eraseCompletedBtn = document.getElementById('remover-finalizados');
const mainList = document.getElementById('lista-tarefas');
console.log(listItem);

function selectedItem(event) {
  const item = event.target;
  const selects = document.getElementsByClassName('selected');
  if (item.classList.contains('selected')) {
    // empty
  } else if (selects.length === 0) {
    item.classList.add('selected');
  } else {
    selects[0].classList.remove('selected');
    item.classList.add('selected');
  }
}

function completedItem(event) {
  const item = event.target;
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

function clickAddList() {
  const inputText = document.getElementById('texto-tarefa');
  const lineList = document.createElement('li');
  lineList.className = 'lista';
  lineList.innerText = inputText.value;
  mainList.appendChild(lineList);
  inputText.value = '';
  mainList.lastElementChild.addEventListener('click', selectedItem);
  mainList.lastElementChild.addEventListener('dblclick', completedItem);
}

buttonText.addEventListener('click', clickAddList);

function eraseAll() {
  const childList = document.getElementsByTagName('li');
  while (childList[0]) {
    mainList.removeChild(childList[0]);
  }
}

eraseAllBtn.addEventListener('click', eraseAll);

function eraseCompleted() {
  const childList = document.getElementsByTagName('li');
  for (let index = 0; index < childList.length; index += 1) {
    if (childList[index].classList.contains('completed')) {
      mainList.removeChild(childList[index]);
      index -= 1;
    }
  }
}

eraseCompletedBtn.addEventListener('click', eraseCompleted);
