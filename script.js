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
document.querySelector('#lista-tarefas').addEventListener('click', changeColor);
function switchSelected(click) {
  const selectedActual = document.querySelector('.selected');
  if (selectedActual === null) {
    click.target.classList.add('selected');
  } else {
    selectedActual.style.backgroundColor = '';
    selectedActual.classList.remove('selected');
    click.target.classList.add('selected');
  }
}
