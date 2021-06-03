// Variáveis iniciais de captura de elementos
let creationButton = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let removeAllButton = document.getElementById('apaga-tudo');
let removeCompletedButton = document.getElementById('remover-finalizados');
let saveChangesButton = document.getElementById('salvar-tarefas');
let mensagem = document.getElementById("mensagem-alerta");
let upwardButton = document.getElementById('mover-cima');
let downwardButton = document.getElementById('mover-baixo');
let removeSelectedButton = document.getElementById('remover-selecionado');

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

// Mover o elemento selecionado para cima
function moveUpward(listPath) {
  let greyLi = document.querySelector('.grey');
  let neededArray = listPath.childNodes;
  for (let index = 1; index < neededArray.length; index += 1) {
    if (neededArray[index] === greyLi) {
      let classes1 = neededArray[index].className;
      let value1 = neededArray[index].innerText;
      let value2 = neededArray[index - 1].innerText;
      if (neededArray[index - 1].className !== '') {
        let classes2 = neededArray[index - 1].className;
        neededArray[index].innerText = value2;
        neededArray[index].className = '';
        neededArray[index].className = classes2;
        neededArray[index - 1].innerText = value1;
        neededArray[index - 1].className = '';
        neededArray[index - 1].className = classes1;
      } else {
        neededArray[index].innerText = value2;
        neededArray[index].className = '';
        neededArray[index - 1].innerText = value1;
        neededArray[index - 1].className = '';
        neededArray[index - 1].className = classes1;
      }
    }
  }
}

// Mover o elemento selecionado para baixo
function moveDownward(listPath) {
  let greyLi = document.querySelector('.grey');
  let neededArray = listPath.childNodes;
  for (let index = neededArray.length - 2; index >= 0; index -= 1) {
    if (neededArray[index] === greyLi) {
      let classes1 = neededArray[index].className;
      let value1 = neededArray[index].innerText;
      let value2 = neededArray[index + 1].innerText;
      if (neededArray[index + 1].className !== '') {
        let classes2 = neededArray[index + 1].className;
        neededArray[index].innerText = value2;
        neededArray[index].className = '';
        neededArray[index].className = classes2;
        neededArray[index + 1].innerText = value1;
        neededArray[index + 1].className = '';
        neededArray[index + 1].className = classes1;
      } else {
        neededArray[index].innerText = value2;
        neededArray[index].className = '';
        neededArray[index + 1].innerText = value1;
        neededArray[index + 1].className = '';
        neededArray[index + 1].className = classes1;
      }
    }
  }
}

// Remover o elemento selecionado
function removeSelected() {
  let toBeDeleted = document.querySelector('.grey');
  toBeDeleted.parentNode.removeChild(toBeDeleted);
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
  greyBackground(list);
  mark(list);
};

// Clicar no botão vai salvar a lista no localStorage
saveChangesButton.onclick = function() {
  saveListChanges();
};

// Clicar no botão irá mover o elemento da lista selecionado para a posição de cima
upwardButton.onclick = function() {
  moveUpward(list);
  greyBackground(list);
  mark(list);
};

// Clicar no botão irá mover o elemento da lista selecionado para a posição de baixo
downwardButton.onclick = function() {
  moveDownward(list);
  greyBackground(list);
  mark(list);
};

// Clicar no botão irá remover o elemento selecionado
removeSelectedButton.onclick = function() {
  removeSelected();
  greyBackground(list);
  mark(list);
};
