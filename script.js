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
      console.log(click.target);
    } else {
      click.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}
document.querySelector('#lista-tarefas').addEventListener('click', changeColor);
