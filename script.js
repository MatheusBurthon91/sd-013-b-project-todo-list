function inputTaskinList() {
  const inputTaskValue = document.getElementById('texto-tarefa').value;
  if (inputTaskValue) {
    const todoList = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = inputTaskValue;
    todoList.appendChild(listItem);
  }
  document.getElementById('texto-tarefa').value = '';
}

window.onload = () => {
  const createTaskButton = document.getElementById('criar-tarefa');
  createTaskButton.addEventListener('click', inputTaskinList);
};
