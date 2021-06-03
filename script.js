// Variáveis iniciais de captura de elementos
const creationButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const removeAllButton = document.getElementById('apaga-tudo');
const removeCompletedButton = document.getElementById('remover-finalizados');
const saveChangesButton = document.getElementById('salvar-tarefas');
const mensagem = document.getElementById('mensagem-alerta');
const upwardButton = document.getElementById('mover-cima');
const downwardButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');

// Recuperar alterações através do localStorage
if (typeof (Storage) !== 'undefined') {
  const changes = localStorage.getItem('listChanges');
  list.innerHTML = changes;
} else {
  mensagem.innerHTML = 'Rapaz, eta navegadorzinho ruim esse teu, hein?';
}

// Adicionar uma tarefa na ol
function addLi(listPath) {
  const input = document.getElementById('texto-tarefa');
  const wantedValue = input.value;
  const newLi = document.createElement('li');
  newLi.innerText = wantedValue;
  listPath.appendChild(newLi);
  input.value = '';
}

// Auxiliar a pintar o background da li selecionada de cinza
function greyBackgroundHelper(element) {
  const searchingForGrey = document.querySelector('.grey');
  if (searchingForGrey === null) {
    element.classList.add('grey');
  } else {
    searchingForGrey.classList.remove('grey');
    element.classList.add('grey');
  }
}

// Pintar o background da li selecionada de cinza
function greyBackground(listPath) {
  const liArray = listPath.children;
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].onclick = function () { greyBackgroundHelper(liArray[index]); };
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
  const liArray = listPath.children;
  for (let index = 0; index < liArray.length; index += 1) {
    liArray[index].ondblclick = function () { markHelper(liArray[index]); };
  }
}

// Esvaziar conteúdo da ol
function removeAll(listPath) {
  const siteList = listPath;
  siteList.innerHTML = '';
}

// Apagar os itens finalizados
function removeCompleted() {
  const completedArray = document.getElementsByClassName('completed');
  for (let index = completedArray.length - 1; index >= 0; index -= 1) {
    completedArray[index].parentNode.removeChild(completedArray[index]);
  }
}

// Salvar lista no localStorage
function saveListChanges() {
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem('listChanges', document.getElementById('lista-tarefas').innerHTML);
  } else {
    const alerting = document.getElementById('mensagem-alerta');
    alerting.innerHTML = 'Rapaz, eta navegadorzinho ruim esse teu, hein?';
  }
}

// Auxiliar da função que move para cima
function moveUpwardHelper(i, na) {
  const dataArray = na;
  const value1 = dataArray[i].innerText;
  const value2 = dataArray[i - 1].innerText;
  const classes1 = dataArray[i].className;
  if (dataArray[i - 1].className !== '') {
    const classes2 = dataArray[i - 1].className;
    dataArray[i].className = classes2;
  }
  dataArray[i].innerText = value2;
  dataArray[i].className = '';
  dataArray[i - 1].innerText = value1;
  dataArray[i - 1].className = '';
  dataArray[i - 1].className = classes1;
}

// Mover o elemento selecionado para cima
function moveUpward(listPath) {
  const greyLi = document.querySelector('.grey');
  const neededArray = listPath.childNodes;
  for (let index = 1; index < neededArray.length; index += 1) {
    if (neededArray[index] === greyLi) {
      moveUpwardHelper(index, neededArray);
    }
  }
}

// Auxiliar da função que move para baixo
function moveDownwardHelper(i, na) {
  const dataArray = na;
  const value1 = dataArray[i].innerText;
  const value2 = dataArray[i + 1].innerText;
  const classes1 = dataArray[i].className;
  if (dataArray[i + 1].className !== '') {
    const classes2 = dataArray[i + 1].className;
    dataArray[i].className = classes2;
  }
  dataArray[i].innerText = value2;
  dataArray[i].className = '';
  dataArray[i + 1].innerText = value1;
  dataArray[i + 1].className = '';
  dataArray[i + 1].className = classes1;
}

// Mover o elemento selecionado para baixo
function moveDownward(listPath) {
  const greyLi = document.querySelector('.grey');
  const neededArray = listPath.childNodes;
  for (let index = neededArray.length - 2; index >= 0; index -= 1) {
    if (neededArray[index] === greyLi) {
      moveDownwardHelper(index, neededArray);
    }
  }
}

// Remover o elemento selecionado
function removeSelected() {
  const toBeDeleted = document.querySelector('.grey');
  toBeDeleted.parentNode.removeChild(toBeDeleted);
}

// Clicar no botão para adicionar uma tarefa
creationButton.onclick = function () {
  addLi(list);
  greyBackground(list);
  mark(list);
};

// Clicar no botão para apagar a lista toda
removeAllButton.onclick = function () {
  removeAll(list);
};

// Clicar no botão apaga os itens finalizados
removeCompletedButton.onclick = function () {
  removeCompleted();
  greyBackground(list);
  mark(list);
};

// Clicar no botão vai salvar a lista no localStorage
saveChangesButton.onclick = function () {
  saveListChanges();
};

// Clicar no botão irá mover o elemento da lista selecionado para a posição de cima
upwardButton.onclick = function () {
  moveUpward(list);
  greyBackground(list);
  mark(list);
};

// Clicar no botão irá mover o elemento da lista selecionado para a posição de baixo
downwardButton.onclick = function () {
  moveDownward(list);
  greyBackground(list);
  mark(list);
};

// Clicar no botão irá remover o elemento selecionado
removeSelectedButton.onclick = function () {
  removeSelected();
  greyBackground(list);
  mark(list);
};
