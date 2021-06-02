// elemento criado com o texto do input;
// clicar no botão cria um elemento;

function element() {
  const text = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newElement = document.createElement('li');
  document.querySelector('#texto-tarefa').value = null;
  newElement.innerText = text;
  list.appendChild(newElement);
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', element);
// elemento adicionado, sai do input;
