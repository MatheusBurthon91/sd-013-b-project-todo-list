function inputTaskList() {
  const inputTaskValue = document.getElementById('texto-tarefa').value;
  if (inputTaskValue) {
    const todoList = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = inputTaskValue;
    listItem.addEventListener('click', () => {
      for (item of todoList.children) {
        if (item.style.backgroundColor === 'rgb(128, 128, 128)') {
          item.style.backgroundColor = 'white';
        }
      }
      listItem.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    listItem.addEventListener('dblclick', () => {
      if (listItem.className.includes('completed')) {
        listItem.classList.remove('completed');
      } else {
        listItem.classList.add('completed');
      }
    });
    todoList.appendChild(listItem);
  }
  document.getElementById('texto-tarefa').value = '';
}

function mountObjectToHtmlELement(itemObject) {
  const item = document.createElement('li');
  item.classList = itemObject.classList;
  item.style.backgroundColor = itemObject.backgroundColor;
  item.innerText = itemObject.innerText;
  return item;
}

window.onload = () => {
  const todoList = document.getElementById('lista-tarefas');
  for (let index = 0; localStorage.getItem(`@listItem${index}`); index += 1) {
    const newItemObject = JSON.parse(localStorage.getItem(`@listItem${index}`));
    const newItem = mountObjectToHtmlELement(newItemObject);  
    todoList.appendChild(newItem);
  }
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.addEventListener('click', inputTaskList);

  // BOTAO LIMPA
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    const todoList = document.getElementById('lista-tarefas');
    const listSize = todoList.children.length;
    for (let index = 0; index < listSize; index += 1) {
      todoList.removeChild(todoList.firstChild);
    }
  });

  // REMOVER FINALIZADOS
  const removeFinishedItemsButton = document.getElementById('remover-finalizados');
  removeFinishedItemsButton.addEventListener('click', () => {
    const finishedItems =  document.querySelectorAll('.completed');
    for (item of finishedItems) {
      item.parentNode.removeChild(item);
    }
  });

  // Salvar Button
  const saveListButton = document.getElementById('salvar-tarefas');
  saveListButton.addEventListener('click', () => {
    const todoList = document.getElementById('lista-tarefas');
    for (let index = 0; index < todoList.children.length; index += 1) {
      const itemObjectMount = {
        innerText: `${todoList.children[index].innerText}`,
        backgroundColor: `${todoList.children[index].style.backgroundColor}`,
        classList: `${todoList.children[index].classList}`,
      };
      localStorage.setItem(`@listItem${index}`, JSON.stringify(itemObjectMount));
    }
  });
};
