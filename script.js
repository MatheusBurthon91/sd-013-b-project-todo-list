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

const ordemList = document.createElement('ol');
ordemList.id = 'lista-tarefas';
containerTasks.appendChild(ordemList);

const corDefault = 'rgb(128, 128, 128)';

// localStorage.setItem(`tarefa ${ordemList.childElementCount}.`, itemList.innerText);
// localStorage.clear();

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
  for (let index = 0; index < listOrden.length; index += 1) {
    listOrden[index].remove();
  }
});
