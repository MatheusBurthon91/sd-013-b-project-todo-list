const buttonText = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');
const eraseCompletedBtn = document.getElementById('remover-finalizados');
const mainList = document.getElementById('lista-tarefas');
const saveBtn = document.getElementById('salvar-tarefas');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');

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

function eraseAll() {
  const childList = document.getElementsByTagName('li');
  while (childList[0]) {
    mainList.removeChild(childList[0]);
  }
}

function eraseCompleted() {
  const childList = document.getElementsByTagName('li');
  for (let index = 0; index < childList.length; index += 1) {
    if (childList[index].classList.contains('completed')) {
      mainList.removeChild(childList[index]);
      index -= 1;
    }
  }
}

function createObjectList(list) {
  return {
    innerText: list.innerText,
    className: list.className,
  };
}

function recoverSavedList(list) {
  const listItem = document.createElement('li');
  listItem.innerText = list.innerText;
  listItem.className = list.className;
  return listItem;
}

function saveListContent() {
  for (let index = 0; index < mainList.children.length; index += 1) {
    const listObj = createObjectList(mainList.children[index]);
    localStorage.setItem(`taskValue${index}`, JSON.stringify(listObj));
  }
}

function recoverLocalStorage() {
  for (let index = 0; localStorage.getItem(`taskValue${index}`); index += 1) {
    const savedObject = JSON.parse(localStorage.getItem(`taskValue${index}`));
    localStorage.removeItem(`taskValue${index}`);
    const listItem = recoverSavedList(savedObject);
    mainList.appendChild(listItem);
    mainList.lastElementChild.addEventListener('click', selectedItem);
    mainList.lastElementChild.addEventListener('dblclick', completedItem);
  }
}

function moveUp() {
  for (let index = 0; index < mainList.children.length; index += 1) {
    if (mainList.children[index].classList.contains('selected') && index > 0) {
      mainList.insertBefore(mainList.children[index], mainList.children[index - 1]);
    }
  }
}

function moveDown() {
  for (let index = 0; index < mainList.children.length; index += 1) {
    if (mainList.children[index].classList.contains('selected')) {
      mainList.insertBefore(mainList.children[index], mainList.children[index + 2]);
      return
    }
  }
}

downBtn.addEventListener('click', moveDown);
upBtn.addEventListener('click', moveUp);
saveBtn.addEventListener('click', saveListContent);
buttonText.addEventListener('click', clickAddList);
eraseAllBtn.addEventListener('click', eraseAll);
eraseCompletedBtn.addEventListener('click', eraseCompleted);

window.onload = recoverLocalStorage;
