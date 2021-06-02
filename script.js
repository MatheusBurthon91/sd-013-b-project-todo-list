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

// Auxiliar a pintar o background da li selecionada de cinza
function greyBackgroundHelper(element) {
  let searchingForGrey = document.querySelector('.grey');
  if (searchingForGrey === null) {
    element.classList.add('grey');
  } else {
    searchingForGrey.classList.remove('grey');
    element.classList.add('grey');
  }
}

// Pintar o background da li selecionada de cinza
function greyBackground(listPath) {
  let liArray = listPath.children;
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].onclick = function() {greyBackgroundHelper(liArray[index])}
  }
}

// Auxiliar a riscar item da lista
function markHelper(element) {
  if (element.classList.contains('completed') === true) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}

// Riscar item da lista
function mark(listPath) {
  let liArray = listPath.children;
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].ondblclick = function() {markHelper(liArray[index])}
  }
}

// Clicar no botão para adicionar uma tarefa
creationButton.onclick = function() {
  addLi(list);
  greyBackground(list);
  mark(list);
};
