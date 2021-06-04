const list = document.getElementById('lista-tarefas');
let button = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');

function createNew() {
  const listItem = document.createElement('li'); 
  listItem.innerText = input.value
  listItem.classList = 'item';
  list.appendChild(listItem)
  input.value = '';
}

button.addEventListener('click', createNew);
  