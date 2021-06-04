const taskInput = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const Button = document.getElementById('criar-tarefa');
const listItem = document.createElement('li');
const Button2 = document.getElementById ('apaga-tudo')
listItem.className = 'list-item';

function addTask() {
  const listItems = document.createElement('li');
  listItems.className = 'list-item';
  listItems.innerText = taskInput.value;
  list.appendChild(listItems);
  taskInput.value = '';
}
Button.addEventListener('click', addTask);

function classRemove() {
  const classTrue = document.getElementsByClassName('selected')[0];
  if (classTrue) {
    classTrue.classList.remove('selected');
  }
}

list.addEventListener('click', (event) => {
  classRemove();
  event.target.classList.add('selected');
});

list.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

function removeAll() {
  list.innerHTML = '';
}
document.getElementById('apaga-tudo').addEventListener('click', removeAll);

