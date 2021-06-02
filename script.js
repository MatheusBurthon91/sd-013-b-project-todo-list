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

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.addEventListener('click', inputTaskList);

  //BOTAO LIMPA
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    const todoList = document.getElementById('lista-tarefas');
    const listSize = todoList.children.length;
    for (let index = 0; index < listSize; index += 1) {
      todoList.removeChild(todoList.firstChild);
    }
  });

  //REMOVER FINALIZADOS
  const removeFinishedItemsButton = document.getElementById('remover-finalizados');
  removeFinishedItemsButton.addEventListener('click', () => {
    const finishedItems =  document.querySelectorAll('.completed');
    for (item of finishedItems) {
      item.parentNode.removeChild(item);
    }
  });
};
