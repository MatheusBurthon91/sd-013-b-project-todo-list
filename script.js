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
function clickAddList() {
  const mainList = document.getElementById('lista-tarefas');
  const inputText = document.getElementById('texto-tarefa');
  const lineList = document.createElement('li');
  lineList.className = 'lista';
  lineList.innerText = inputText.value;
  mainList.appendChild(lineList);
  inputText.value = '';
  mainList.lastElementChild.addEventListener('click', selectedItem);
}

buttonText.addEventListener('click', clickAddList);
