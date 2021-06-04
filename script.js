const list = document.getElementById('lista-tarefas');
let button = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');


function createNew() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.classList = 'item';
  list.appendChild(listItem);
  input.value = '';
}

function selecting() {
  if (event.target.classList.contains('item')) {
    const lastItem = document.querySelector('.selectedItem');
    event.target.classList.add('selectedItem');
    if (lastItem) {
      lastItem.classList.remove('selectedItem');
    }
  }
}

function completed() {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

button.addEventListener('click', createNew);
list.addEventListener('click', selecting);
list.addEventListener('dblclick', completed);
list.innerText = localStorage.getItem('list');
