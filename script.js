const olTask = document.getElementById('lista-tarefas');
const liItems = olTask.children;
const inputTask = document.getElementById('texto-tarefa');
const toDoListSaved = localStorage.getItem('tarefas');

// Verifico se existe algo no Storage, caso haja eu puxo as informações
if (typeof Storage !== 'undefined') {
  olTask.innerHTML = toDoListSaved;
}

// Adiciono o evento de click no botão adicionar
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const li = document.createElement('li');
  if (inputTask.value.trim() !== '') {
    li.innerText = inputTask.value;
    olTask.appendChild(li);
    inputTask.value = '';
  } else return alert('Digite algo doido!');
});

// Adiciona o evento de tecla ENTER (keyCode === 13)
// fonte: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
inputTask.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    document.getElementById('criar-tarefa').click();
  }
});

// Verifico se já existe a a classe selected no elemento e removo
// adiciono ao elemento vinculado ao event.target a classe selected
olTask.addEventListener('click', (event) => {
  const targetElement = event.target;
  for (let index = 0; index < liItems.length; index += 1) {
    if (liItems[index].classList.contains('selected')) {
      liItems[index].classList.remove('selected');
    }
  }
  // Verifico se o pai foi clicdo para nao colocar a classe selected nele e os outro nos herdarem
  return targetElement.getAttribute('id')
    ? ''
    : targetElement.classList.toggle('selected');
});

// adiciona a classe completed no elemento alvo
olTask.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

// Apago todos od itens da lista
// fonte https://www.w3schools.com/jsref/met_node_removechild.asp
document.getElementById('apaga-tudo').addEventListener('click', () => {
  while (olTask.hasChildNodes()) {
    olTask.removeChild(olTask.firstChild);
  }
});

// Removo os elementos que contem a classe completed
document.getElementById('remover-finalizados').addEventListener('click', () => {
  const nodesCompleted = olTask.querySelectorAll('.completed');
  for (let index = 0; index < nodesCompleted.length; index += 1) {
    nodesCompleted[index].remove();
  }
});

// Salvo a lista no localStorage
document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('tarefas', olTask.innerHTML);
});

// Função para verificar se é o primeiro ou ultimo elemento da lista
function isFirst(params) {
  return params === olTask.firstChild;
}

function isLast(params) {
  return params === olTask.lastChild;
}

// Movo o elemento para cima
document.getElementById('mover-cima').addEventListener('click', () => {
  const taskToMove = document.querySelector('.selected');
  if (!isFirst(taskToMove)) {
    return taskToMove
      ? olTask.insertBefore(taskToMove, taskToMove.previousElementSibling)
      : '';
  }
});

// Movo o elemento para baixo
document.getElementById('mover-baixo').addEventListener('click', () => {
  const taskToMove = document.querySelector('.selected');
  if (!isLast(taskToMove)) {
    return taskToMove
      ? olTask.insertBefore(taskToMove.nextElementSibling, taskToMove)
      : '';
  }
});

// Deleto o elemento selecionado
document.getElementById('remover-selecionado').addEventListener('click', () => {
  document.querySelector('.selected').remove();
});
