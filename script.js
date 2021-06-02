const main = document.querySelector('#principal');

// Cria tags e define ID.
function createElementID(type, father, idName) {
  const tag = document.createElement(type);
  tag.id = idName;
  father.appendChild(tag);
}

window.onload = function start() {
  createElementID('input', main, 'texto-tarefa');
  document.querySelector('#texto-tarefa').type = 'text';

  createElementID('ol', main, 'lista-tarefas');
};
