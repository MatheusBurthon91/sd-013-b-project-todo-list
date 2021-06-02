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
};
