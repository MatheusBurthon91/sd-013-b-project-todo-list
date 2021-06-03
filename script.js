const lista = document.querySelector('#lista-tarefas');
function criaElemento(elemento) { // função pra criar elemento;
  const element = document.createElement(elemento);
  return element;
}
function listBackground(eventoDeOrigem) { // função para adicionar fundo a tarefa clicada;
  const list = document.querySelectorAll('.list');
  const evento = eventoDeOrigem.target;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] !== evento) {
      list[index].classList.remove('selected');
    } else {
      list[index].classList.add('selected');
    }
  }
}
function addEventListBackground() { // função para adicionar evento que ao clicar adiciona fundo usando a função anterior;
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', listBackground);
  }
}
function listSublinha(eventoDeOrigem) { // essa função ao ser chamada adiciona ou remove a classe completed;
  const list = document.querySelectorAll('.list');
  const evento = eventoDeOrigem.target;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === evento) {
      list[index].classList.toggle('completed');
    }
  }
}
function addEventListSublinha() { // essa função adiciona evento que sublinha, chamando a função anterior;
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('dblclick', listSublinha);
  }
}
function clearALl() { // essa função ao ser chamada limpa todas as tarefas da lista;
  lista.innerHTML = '';
}
function addEventClear() { // essa função adiciona evento de apagar todas as tarefas, chamando a função anterior;
  const elemento = document.querySelector('#apaga-tudo');
  elemento.addEventListener('click', clearALl);
}
function clearFinished() { // essa função ao ser chamada limpa todas as tarefas concluídas da lista;
  const list = document.querySelectorAll('.completed');
  for (let index = 0; index < list.length; index += 1) {
    list[index].parentNode.removeChild(list[index]);
  }
}
function addEventClearFinished() { // essa função adiciona evento de apagar todas as tarefas concluídas, chamando a função anterior;
  const elemento = document.querySelector('#remover-finalizados');
  elemento.addEventListener('click', clearFinished);
}
function listSaved() { // essa função salva no localStorage o html da lista;
  const object = {
    tasks: lista.innerHTML,
  };
  localStorage.setItem('tasks', object.tasks);
}
function addEventSaved() { // essa função adiciona evento que ao ser acionada, executa a função anterior salvando a lista;
  const elemento = document.querySelector('#salvar-tarefas');
  elemento.addEventListener('click', listSaved);
}
function addElementsSaved() { // essa função ao ser executada, trás o html salvo para a pagina
  const tasks = localStorage.getItem('tasks');
  lista.innerHTML = tasks;
}
function moveUp() { // essa função move item selecionado para cima;
  const selected = document.querySelector('.selected');
  const item = lista.firstElementChild;
  if (selected !== item) {
    lista.insertBefore(selected, selected.previousSibling);
  }
}
function addEventMoveUp() { // essa função adiciona evento de mover para cima;
  const movedUp = document.querySelector('#mover-cima');
  movedUp.addEventListener('click', moveUp);
}
function moveDown() { // essa função move item selecionado para baixo;
  const selected = document.querySelector('.selected');
  const item = lista.lastElementChild;
  if (selected !== item) {
    lista.insertBefore(selected, selected.nextElementSibling.nextSibling);
  }
}
function addEventMoveDown() { // essa função adiciona evento de mover para baixo;
  const movedDown = document.querySelector('#mover-baixo');
  movedDown.addEventListener('click', moveDown);
}
function taskSubmit() { // função que adiciona o elemento com o valor do input, e chama a função anterior para adicionar evento que muda o fundo;
  const taskValue = document.querySelector('#texto-tarefa').value;
  const newElement = criaElemento('li');
  newElement.innerText = taskValue;
  newElement.classList = 'list';
  lista.appendChild(newElement);
  document.querySelector('#texto-tarefa').value = '';
  addEventListBackground();
  addEventListSublinha();
  addEventClear();
  addEventClearFinished();
  addEventSaved();
  addEventMoveUp();
  addEventMoveDown();
}

const taskBtn = document.querySelector('#criar-tarefa');
taskBtn.addEventListener('click', taskSubmit); // evento que adiciona tarefa a lista;
addElementsSaved();
addEventListBackground();
addEventListSublinha();
addEventClear();
addEventClearFinished();
addEventSaved();
addEventMoveUp();
addEventMoveDown();
