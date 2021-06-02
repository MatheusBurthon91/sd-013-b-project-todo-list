// elemento criado com o texto do input;
// clicar no botão cria um elemento;

// clicar item altera background
function color(liItem) {
  // const liItem = document.querySelectorAll('li');
  // for (let index = 0; index < liItem.length; index += 1) {
  liItem.addEventListener('click', () => {
    liItem.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
function element() {
  const text = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newElement = document.createElement('li');
  color(newElement);
  document.querySelector('#texto-tarefa').value = null;
  newElement.innerText = text;
  list.appendChild(newElement);
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', element);
