// Variáveis iniciais de captura de elementos
let creationButton = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

// Adicionar uma tarefa na ol
function addLi(listPath) {
  input = document.getElementById('texto-tarefa');
  value = input.value;
  newLi = document.createElement('li');
  newLi.innerText = value;
  listPath.appendChild(newLi);
  input.value = '';
}

// Clicar no botão para adicionar uma tarefa
creationButton.onclick = function() {addLi(list)}
