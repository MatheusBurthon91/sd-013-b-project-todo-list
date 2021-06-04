function createListItemObject(listItem) {
  return {
    innerText: listItem.innerText,
    className: listItem.className,
  };
}

function selectionEventAssigner(target) {
  target.addEventListener('click', () => {
    for (listItem of target.parentNode.children) {
      if (listItem.className.includes('selected')) {
        listItem.classList.remove('selected');
      }
    }
    target.classList.add('selected');
  });
}

function completedEventAssigner(target) {
  target.addEventListener('dblclick', () => {
    if (target.className.includes('completed')) {
      target.classList.remove('completed');
    } else {
      target.classList.add('completed');
    }
  });
}

function createListItemHtmlElement(listItemObject) {
  const listItem = document.createElement('li');
  listItem.innerText = listItemObject.innerText;
  listItem.className = listItemObject.className;
  selectionEventAssigner(listItem);
  completedEventAssigner(listItem);
  return listItem;
}

function clearList(list) {
  const listSize = list.children.length;
  for (let index = 0; index < listSize; index += 1) {
    list.removeChild(list.firstChild);
  }
}

function removeItemsByClass(list, targetClass) {
  const items = list.querySelectorAll(`.${targetClass}`);
  for (item of items) {
    item.parentNode.removeChild(item);
  }
}

function saveList(list) {
  for (let index = 0; index < list.children.length; index += 1) {
    const itemObject = createListItemObject(list.children[index]);
    localStorage.setItem(`listItem-${index}`, JSON.stringify(itemObject));
  }
}

function moveSelectedItem(list, direction) {
  let directionAssignValue = 0;
  if (direction === 'up') {
    directionAssignValue = -1;
  }
  if (direction === 'down') {
    directionAssignValue = 2;
  }
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className.includes('selected') && !(!index && direction ==='up')) {
      list.insertBefore(list.children[index], list.children[index + directionAssignValue]);
      return directionAssignValue;
    }
  }
}

window.onload = function () {
  const inputListItemButton = document.getElementById('criar-tarefa');
  const clearListButton = document.getElementById('apaga-tudo');
  const removeFishedListItemButton = document.getElementById('remover-finalizados');
  const saveListButton = document.getElementById('salvar-tarefas');
  const moveUpListItemButton = document.getElementById('mover-cima');
  const moveDownListItemButton = document.getElementById('mover-baixo');
  const removeSelectedListItemButton = document.getElementById('remover-selecionado');

  const todoList = document.getElementById('lista-tarefas');

  for (let index = 0; localStorage.getItem(`listItem-${index}`); index += 1) {
    const newItemObject = JSON.parse(localStorage.getItem(`listItem-${index}`));
    const newItem = createListItemHtmlElement(newItemObject);
    todoList.appendChild(newItem);
  }

  inputListItemButton.addEventListener('click', () => {
    const inputElement = document.getElementById('texto-tarefa');
    if (inputElement.value) {
      const listObject = {
        innerText: inputElement.value,
        className: '',
      };
      const listElement = createListItemHtmlElement(listObject);
      todoList.appendChild(listElement);
      inputElement.value = '';
    }
  });

  clearListButton.addEventListener('click', () => {
    clearList(todoList);
  });

  removeFishedListItemButton.addEventListener('click', () => {
    removeItemsByClass(todoList, 'completed');
  });

  saveListButton.addEventListener('click', () => {
    saveList(todoList);
  });

  removeSelectedListItemButton.addEventListener('click', () => {
    removeItemsByClass(todoList, 'selected');
  });

  moveUpListItemButton.addEventListener('click', () => {
    moveSelectedItem(todoList, 'up');
  });

  moveDownListItemButton.addEventListener('click', () => {
    moveSelectedItem(todoList, 'down');
  });
};
