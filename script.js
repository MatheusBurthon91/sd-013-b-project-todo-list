const list = document.querySelector('#lista-tarefas');

function addList() {
  const task = document.createElement('li');
  task.innerText = document.querySelector('#texto-tarefa').value;
  list.appendChild(task);
  document.querySelector('#texto-tarefa').value = '';
}

document.querySelector('#criar-tarefa').addEventListener('click', addList);

function addBackground(event) {
  const listArray = document.querySelector('#lista-tarefas').children;
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
