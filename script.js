const ol = document.getElementById('lista-tarefas');
function addAssigment() {
  const TextBox = document.getElementById('texto-tarefa');
  if (TextBox.value !== '') {
    const listas = document.createElement('li');
    listas.className = 'listItem';
    listas.innerText = TextBox.value;
    TextBox.value = '';
    ol.appendChild(listas);
  }
}
document.getElementById('criar-tarefa').addEventListener('click', addAssigment);
function switchSelected(click) {
  console.log(click.type);
  const selectedActual = document.querySelector('.selected');
  if (selectedActual === null) {
    click.target.classList.toggle('selected');
  } else {
    selectedActual.classList.remove('selected');
    selectedActual.style.backgroundColor = '';
    click.target.classList.toggle('selected');
  }
}

function changeColor(event) {
  const click = event;
  if (click.target.className === 'listItem') {
    if (click.target.style.backgroundColor === 'rgb(128, 128, 128)') {
      click.target.style.backgroundColor = '';
    } else {
      click.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
  switchSelected(click);
}

function risca(event) {
  const click = event;
  if (click.target.classList.contains('completed')) {
    click.target.classList.remove('completed');
  } else {
    click.target.classList.add('completed');
  }
}
const lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', changeColor);
lista.addEventListener('dblclick', risca);

function clearAll() {
  while (ol.firstChild) {
    ol.removeChild(ol.lastChild);
  }
}
function clearComplets() {
  document.querySelectorAll('.completed').forEach(element => element.remove());
}
document.getElementById('apaga-tudo').addEventListener('click', clearAll);
document.getElementById('remover-finalizados').addEventListener('click', clearComplets);
// document.getElementsByClassName('completed')