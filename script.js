const ol = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
let li = document.createElement('li');
const buttonClear = document.getElementById('apaga-tudo');

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

function riskItem(eventoCompleted) {
  if (eventoCompleted.target.tagName === 'LI') {
    eventoCompleted.target.classList.toggle('completed');
  }
}

ol.addEventListener('dblclick', riskItem);

function clearList() {
  ol.innerHTML = '';
  // ol.removeChild(ol.childNodes[0]);
}

buttonClear.addEventListener('click', clearList);
