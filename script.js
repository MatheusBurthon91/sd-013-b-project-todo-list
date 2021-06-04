const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

function createNew() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.classList = 'item';
  list.appendChild(listItem);
  input.value = '';
}

function selecting(event) {
  if (event.target.classList.contains('item')) {
    const lastItem = document.querySelector('.selectedItem');
    event.target.classList.add('selectedItem');
    if (lastItem) {
      lastItem.classList.remove('selectedItem');
    }
  }
}

function completed(event) {
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
