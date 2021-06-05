const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const removeAll = document.getElementById('apaga-tudo');
const removeRisk = document.getElementById('remover-finalizados');

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

function removeList() {
  const item = document.querySelectorAll('.item');
  for (let index = 0; index < item.length; index += 1) {
  item[index].remove();
  }
}

function removeCompleted() {
  const done = document.querySelectorAll('.completed');
  for (let index = 0; index < done.length; index += 1) {
    done[index].remove();
  }
}

removeRisk.addEventListener('click', removeCompleted);
removeAll.addEventListener('click', removeList);
button.addEventListener('click', createNew);
list.addEventListener('click', selecting);
list.addEventListener('dblclick', completed);
list.innerText = localStorage.getItem('list');
