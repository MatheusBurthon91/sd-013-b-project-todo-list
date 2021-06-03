window.onload = function printSavedTasks() {
  const itens = document.querySelector('ol');
  itens.innerHTML = localStorage.getItem('task-list');
};
const button = document.querySelector('#criar-tarefa');
const secondButton = document.querySelector('#apaga-tudo');
const thirdButton = document.querySelector('#remover-finalizados');
const fourthButton = document.querySelector('#remover-selecionado');
const fifhtButton = document.querySelector('#salvar-tarefas');

function setClass(element) {
  element.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
      element.classList.add('selected');
      selectedItem.classList.remove('selected');
    } else {
      element.classList.add('selected');
    }
  });
}

function riskTask(element) {
  element.addEventListener('dblclick', () => {
    if (element.classList.contains('completed')) {
      element.classList.remove('completed');
    } else {
      element.classList.add('completed');
    }
  });
}

function setTask() {
  const input = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerText = input.value;
  item.className = 'item';
  input.value = '';
  const lista = document.querySelector('#lista-tarefas');
  lista.appendChild(item);
  setClass(item);
  riskTask(item);
}

button.addEventListener('click', setTask);

function clearTasks() {
  const itens = document.querySelectorAll('li');
  if (itens.length > 0) {
    for (let index = 0; index < itens.length; index += 1) {
      itens[index].remove();
    }
  }
}

secondButton.addEventListener('click', clearTasks);

function clearFinishedTasks() {
  const itens = document.querySelectorAll('li');
  if (itens.length > 0) {
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList.contains('completed')) {
        itens[index].remove();
      }
    }
  }
}

thirdButton.addEventListener('click', clearFinishedTasks);

function saveTasks() {
  const itens = document.querySelector('ol');
  localStorage.setItem('task-list', itens.innerHTML);
}

fifhtButton.addEventListener('click', saveTasks);

function clearSelectedTasks() {
  const itens = document.querySelectorAll('li');
  if (itens.length > 0) {
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList.contains('selected')) {
        itens[index].remove();
      }
    }
  }
}

fourthButton.addEventListener('click', clearSelectedTasks);
