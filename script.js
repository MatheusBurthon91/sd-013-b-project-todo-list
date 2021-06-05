/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable no-empty */
const button = document.querySelector('#criar-tarefa');
const secondButton = document.querySelector('#apaga-tudo');
const thirdButton = document.querySelector('#remover-finalizados');
const fourthButton = document.querySelector('#remover-selecionado');
const fifhtButton = document.querySelector('#salvar-tarefas');
const sixthButton = document.querySelector('#mover-cima');
const seventhButton = document.querySelector('#mover-baixo');

function setClass(element) {
  element.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
      element.classList.add('selected');
      selectedItem.classList.remove('selected');
      if (selectedItem === element) {
        element.classList.add('selected');
      }
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

window.onload = function printSavedTasks() {
  const itens = document.querySelector('ol');
  itens.innerHTML = localStorage.getItem('task-list');
};

function moveUp() {
  const itens = document.querySelector('ol').children;
  if (itens.length > 0) {
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList.contains('selected') && itens[index].previousElementSibling !== null) {
        let newItem;
        newItem = itens[index].previousElementSibling.innerHTML;
        itens[index].previousElementSibling.innerHTML = itens[index].innerHTML;
        itens[index].previousElementSibling.classList.add('selected');
        itens[index].innerHTML = newItem;
        itens[index].classList.remove('selected');
        if (itens[index].classList.contains('completed')) {
          itens[index].classList.remove('completed');
          itens[index].previousElementSibling.classList.add('completed');
        } else if (itens[index].previousElementSibling.classList.contains('completed')) {
          itens[index].previousElementSibling.classList.remove('completed');
          itens[index].classList.add('completed');
        }
      }
    }
  }
}

sixthButton.addEventListener('click', moveUp);

function moveDown() {
  const itens = document.querySelector('ol').children;
  if (itens.length > 0) {
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList.contains('selected') && itens[index].nextElementSibling !== null) {
        let newIten;
        newIten = itens[index].nextElementSibling.innerHTML;
        itens[index].nextElementSibling.innerHTML = itens[index].innerHTML;
        itens[index].classList.remove('selected');
        itens[index].innerHTML = newIten;
        itens[index].nextElementSibling.classList.add('selected');
        if (itens[index].classList.contains('completed')) {
          itens[index].classList.remove('completed');
          itens[index].nextElementSibling.classList.add('completed');
        } else if (itens[index].nextElementSibling.classList.contains('completed')) {
          itens[index].nextElementSibling.classList.remove('completed');
          itens[index].classList.add('completed');
        }
        break;
      }
    }
  }
}

seventhButton.addEventListener('click', moveDown);
