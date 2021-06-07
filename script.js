const list = document.getElementById('lista-tarefas'); // ol

// 5 e 6
const button = document.getElementById('criar-tarefa');
function addTask() {
  //  pegar o conteudo do input e adicionar como uma nova li da ol
  const inputValue = document.querySelector('input').value; // input
  const newValue = document.createElement('li'); // li
  newValue.appendChild(document.createTextNode(inputValue));
  list.appendChild(newValue);
  document.querySelector('input').value = '';
}
button.addEventListener('click', addTask);

// 7 e 8
function removeSelectedClass() {
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      li[index].classList.remove('selected');
    }
  }
}

function changeSelectedClass(event) {
  removeSelectedClass();
  const clickedLi = event.target;
  clickedLi.classList.add('selected');
}
list.addEventListener('click', changeSelectedClass);

function changeColor() {
  const grayColor = 'rgb(128,128,128)';
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      li[index].style.backgroundColor = grayColor;
    } else {
      li[index].style.backgroundColor = 'white';
    }
  }
}
list.addEventListener('click', changeColor);

// [incompleto] 9
function addCompletedClass(event) {
  const clickedLi = event.target;
  clickedLi.classList.add('completed');
}
list.addEventListener('dblclick', addCompletedClass);

// 10
const clearButton = document.getElementById('apaga-tudo');
function clearAll() {
  list.innerHTML = '';
}
clearButton.addEventListener('click', clearAll);

// 11
const removeButton = document.getElementById('remover-finalizados');
function removeFinishedItems() {
  const finishedItems = document.getElementsByClassName('completed');
  while (finishedItems.length > 0) {
    finishedItems[0].parentNode.removeChild(finishedItems[0]);
  }
}
removeButton.addEventListener('click', removeFinishedItems);
