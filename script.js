// Variáveis iniciais de captura de elementos
let creationButton = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

// Adicionar uma tarefa na ol
function addLi(listPath) {
  let input = document.getElementById('texto-tarefa');
  let value = input.value;
  let newLi = document.createElement('li');
  newLi.innerText = value;
  listPath.appendChild(newLi);
  input.value = '';
}

// Pintar o background de cinza
function backgroundPainter(element) {
  element.className = 'grey';
}

// Tornar o fundo de um item da lista cinza
function greyBackground(listPath) {
  let liArray = listPath.children;
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].onclick = function() {backgroundPainter(liArray[index])}
  }
}

// Clicar no botão para adicionar uma tarefa
creationButton.onclick = function() {
  addLi(list);
  greyBackground(list);
}
