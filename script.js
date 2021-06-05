const containerTasks = document.getElementById('container-tasks');
const containerButtons = document.getElementById('container-buttons');

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
inputTasks.type = 'text';
inputTasks.placeholder = 'Digite aqui sua tarefa...';
inputTasks.size = '30';
inputTasks.className = 'item-container';
containerTasks.appendChild(inputTasks);

const btnCreateTasks = document.createElement('button');
btnCreateTasks.id = 'criar-tarefa';
btnCreateTasks.innerText = 'Adiconar';
btnCreateTasks.className = 'item-container';
containerTasks.appendChild(btnCreateTasks);

const btnClearAll = document.createElement('button');
btnClearAll.id = 'apaga-tudo';
btnClearAll.innerText = 'Apagar Lista';
containerButtons.appendChild(btnClearAll);

const btnClearSelectioned = document.createElement('button');
btnClearSelectioned.id = 'remover-finalizados';
btnClearSelectioned.innerHTML = 'Limpar Completos';
containerButtons.appendChild(btnClearSelectioned);

const btnSaveTasks = document.createElement('button');
btnSaveTasks.id = 'salvar-tarefas';
btnSaveTasks.innerText = 'Salvar Lista';
containerButtons.appendChild(btnSaveTasks);

const ordemList = document.createElement('ol');
ordemList.id = 'lista-tarefas';
containerTasks.appendChild(ordemList);

const corDefault = 'rgb(128, 128, 128)';

function clearSelect() {
  const listItem = document.getElementsByClassName('item-list');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].title === 'selected') {
      listItem[index].style.backgroundColor = 'transparent';
      listItem[index].title = 'deselected';
    }
  }
}

function selectioned(item) {
  const itemSelectioned = item;
  if (itemSelectioned.style.backgroundColor !== corDefault) {
    itemSelectioned.style.backgroundColor = corDefault;
    clearSelect();
    itemSelectioned.title = 'selected';
  } else {
    itemSelectioned.title = 'deselected';
    itemSelectioned.style.backgroundColor = 'transparent';
  }
}

function completed(item) {
  const itemCompleted = item;
  if (itemCompleted.className !== 'completed') {
    itemCompleted.className = 'completed';
  } else {
    itemCompleted.className = 'item-list';
  }
}

function createItemRestored(item, className, title, color) {
  const itemList = document.createElement('li');
  itemList.innerText = item;
  itemList.className = className;
  itemList.title = title;
  itemList.style.backgroundColor = color;
  ordemList.appendChild(itemList);
  itemList.addEventListener('dblclick', () => {
    completed(itemList);
  });
  itemList.addEventListener('click', () => {
    selectioned(itemList);
  });
}

function restoreList() {
  for (let index = 0; index < localStorage.length; index += 4) {
    if (localStorage[index] !== null) {
      createItemRestored(localStorage[index],
        localStorage[index + 1],
        localStorage[index + 2],
        localStorage[index + 3]);
    }
  }
}
restoreList();

btnCreateTasks.addEventListener('click', () => {
  const itemList = document.createElement('li');
  itemList.innerText = inputTasks.value;
  itemList.className = 'item-list';
  inputTasks.value = '';
  ordemList.appendChild(itemList);
  itemList.addEventListener('dblclick', () => {
    completed(itemList);
  });
  itemList.addEventListener('click', () => {
    selectioned(itemList);
  });
});

btnClearAll.addEventListener('click', () => {
  const listOrden = document.querySelectorAll('.item-list');
  const completedList = document.querySelectorAll('.completed');
  for (let index = 0; index < listOrden.length; index += 1) {
    listOrden[index].remove();
  }
  for (let index = 0; index < completedList.length; index += 1) {
    completedList[index].remove();
  }
  localStorage.clear();
});

btnClearSelectioned.addEventListener('click', () => {
  const completeds = document.querySelectorAll('.completed');
  for (let index = 0; index < completeds.length; index += 1) {
    completeds[index].remove();
  }
});

btnSaveTasks.addEventListener('click', () => {
  localStorage.clear();
  let indexItem = 0;
  for (let index = 0; index < ordemList.children.length * 4; index += 4) {
    localStorage.setItem([index], ordemList.children[indexItem].innerText);
    localStorage.setItem([index + 1], ordemList.children[indexItem].className);
    localStorage.setItem([index + 2], ordemList.children[indexItem].title);
    localStorage.setItem([index + 3], ordemList.children[indexItem].style.backgroundColor);
    console.log(index);
    indexItem += 1;
  }
});
