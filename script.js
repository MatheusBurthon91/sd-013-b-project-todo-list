// Variáveis iniciais de captura de elementos
let creationButton = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let removeAllButton = document.getElementById('apaga-tudo');
let removeCompletedButton = document.getElementById('remover-finalizados');
let saveChangesButton = document.getElementById('salvar-tarefas');
let mensagem = document.getElementById("mensagem-alerta");

// Recuperar alterações através do localStorage
if (typeof(Storage) !== "undefined") {
  let changes = localStorage.getItem("listChanges");
  list.innerHTML = changes;
} else {
  mensagem.innerHTML = "Rapaz, eta navegadorzinho ruim esse teu, hein?";
}

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

// Esvaziar conteúdo da ol
function removeAll(listPath) {
  listPath.innerHTML = '';
}

// Apagar os itens finalizados
function removeCompleted() {
  let completedArray = document.getElementsByClassName('completed');
  for (let index = completedArray.length - 1; index >= 0; index -= 1) {
    completedArray[index].parentNode.removeChild(completedArray[index]);
  }
}

// Salvar lista no localStorage
function saveListChanges () {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("listChanges", document.getElementById('lista-tarefas').innerHTML);
  } else {
    document.getElementById("mensagem-alerta").innerHTML = "Rapaz, eta navegadorzinho ruim esse teu, hein?";
  }
}

// Clicar no botão para adicionar uma tarefa
creationButton.onclick = function() {
  addLi(list);
  greyBackground(list);
  mark(list);
};

// Clicar no botão para apagar a lista toda
removeAllButton.onclick = function() {
  removeAll(list);
};

// Clicar no botão apaga os itens finalizados
removeCompletedButton.onclick = function() {
  removeCompleted(list);
};

// Clicar no botão vai salvar a lista no localStorage
saveChangesButton.onclick = function() {
  saveListChanges();
};
