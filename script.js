const list = document.querySelector('#lista-tarefas');

function addList() {
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  list.appendChild(task);
  document.querySelector('#texto-tarefa').value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addList);

function addBackground(event) {
  const listArray = list.children;
  for (let index = 0; index < listArray.length; index += 1) {
    listArray[index].style.backgroundColor = '';
  }
  const selectedList = event.target;
  selectedList.style.backgroundColor = 'rgb(128, 128, 128)';
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
