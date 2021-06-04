function createListItemObject(listItem) {
  return {
    innerText: listItem.innerText,
    className: listItem.className,
  };
}

function selectionEventAssigner(target) {
  target.addEventListener('click', () => {
    for (let index = 0; index < target.parentNode.children.length; index += 1) {
      const listItem = target.parentNode.children[index];
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
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    item.parentNode.removeChild(item);
  }
}

function saveList(list) {
  for (let index = 0; index < list.children.length; index += 1) {
    const itemObject = createListItemObject(list.children[index]);
    localStorage.setItem(`listItem-${index}`, JSON.stringify(itemObject));
  }
}

function moveUpSelectedItem(list) {
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className.includes('selected') && index > 0) {
      list.insertBefore(list.children[index], list.children[index - 1]);
      return true;
    }
  }
  return false;
}

function moveDownSelectedItem(list) {
  for (let index = 0; index < list.children.length; index += 1) {
    if (list.children[index].className.includes('selected')) {
      list.insertBefore(list.children[index], list.children[index + 2]);
      return true;
    }
  }
  return false;
}

const inputListItemButton = document.getElementById('criar-tarefa');
const clearListButton = document.getElementById('apaga-tudo');
const removeFishedButton = document.getElementById('remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const moveUpListItemButton = document.getElementById('mover-cima');
const moveDownListItemButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');
const list = document.getElementById('lista-tarefas');

for (let index = 0; localStorage.getItem(`listItem-${index}`); index += 1) {
  const newItemObject = JSON.parse(localStorage.getItem(`listItem-${index}`));
  const newItem = createListItemHtmlElement(newItemObject);
  list.appendChild(newItem);
}

inputListItemButton.addEventListener('click', () => {
  const inputElement = document.getElementById('texto-tarefa');
  if (inputElement.value) {
    const listObject = {
      innerText: inputElement.value,
      className: '',
    };
    const listElement = createListItemHtmlElement(listObject);
    list.appendChild(listElement);
    inputElement.value = '';
  }
});
clearListButton.addEventListener('click', () => { clearList(list); });
removeFishedButton.addEventListener('click', () => { removeItemsByClass(list, 'completed'); });
saveListButton.addEventListener('click', () => { saveList(list); });
removeSelectedButton.addEventListener('click', () => { removeItemsByClass(list, 'selected'); });
moveUpListItemButton.addEventListener('click', () => { moveUpSelectedItem(list); });
moveDownListItemButton.addEventListener('click', () => { moveDownSelectedItem(list); });
// window.onload = () => {
// };
