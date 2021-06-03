const input = document.getElementById('texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
let lastSelected;

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.innerText = input.value;
  newItem.classList.add('item-list');
  listaTarefas.appendChild(newItem);
  input.value = '';
  newItem.addEventListener('click', () => {
    if (lastSelected) lastSelected.classList.remove('gray');
    lastSelected = newItem; newItem.classList.add('gray');
  });
  newItem.addEventListener('dblclick', () => {
    if (newItem.classList.contains('completed')) {
      newItem.classList.remove('completed');
    } else {
      newItem.classList.add('completed');
    }
  });
});
