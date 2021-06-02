const buttonText = document.getElementById('criar-tarefa');
const listItem = document.getElementsByTagName('li');
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
  const mainList = document.getElementById('lista-tarefas');
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
