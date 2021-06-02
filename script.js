// elemento criado com o texto do input;
// clicar no botão cria um elemento;

const button = document.querySelector('#criar-tarefa');
function element() {
  const text = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newElement = document.createElement('li');
  newElement.innerText = text;
  list.appendChild(newElement);
}
element();
button.addEventListener('click', element);
// elemento adicionado, sai do input;
