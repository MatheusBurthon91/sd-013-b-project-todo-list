function criaElemento(elemento) {
  const element = document.createElement(elemento);
  return element;
}
function taskSubmit() {
  let taskValue = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newElement = criaElemento('li');
  newElement.innerText = taskValue;
  list.appendChild(newElement);
  document.querySelector('#texto-tarefa').value = '';
}
const taskBtn = document.querySelector('#criar-tarefa');
taskBtn.addEventListener('click', taskSubmit);
