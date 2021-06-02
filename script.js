function createItemList(value) {
  const orderList = document.getElementById('lista-tarefas');
  const element = document.createElement('li');
  element.innerText = value;
  orderList.appendChild(element);
}

function createTask() {
  const input = document.getElementById('texto-tarefa');
  createItemList(input.value);
  input.value = '';// seis
}

function init() {
  const buttonAddTask = document.getElementById('criar-tarefa');

  buttonAddTask.addEventListener('click', createTask);
}

window.onload = () => {
  init();
};
