const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
let li = document.createElement('li');

function createItem() {
  const input = document.getElementById('texto-tarefa').value;
  li = document.createElement('li');
  ol.appendChild(li);
  li.appendChild(document.createTextNode(input));
  document.getElementById('texto-tarefa').value = '';
}

button.addEventListener('click', createItem);

function changeItemColor(eventoColor) {
  if (eventoColor.target.tagName === 'LI') {
    const selectedListItem = document.querySelector('.selected');
    if (selectedListItem == null) {
      eventoColor.target.classList.add('selected');
    } else if (selectedListItem !== eventoColor.target) {
      selectedListItem.classList.remove('selected');
      eventoColor.target.classList.add('selected');
    }
  }
}

ol.addEventListener('click', changeItemColor);
