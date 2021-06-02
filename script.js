function createItemList(value) {
  const orderList = document.getElementById('lista-tarefas');
  const element = document.createElement('li');
  element.innerText = value;
  element.classList.add('listItem');
  orderList.appendChild(element);
}

function createTask() {
  const input = document.getElementById('texto-tarefa');
  createItemList(input.value);
  input.value = '';
}

function createSelected(event) {
  const element = event.target;
  console.log(element);
  if (element.className === 'listItem') {
    console.log(element);
    element.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function init() {
  const buttonAddTask = document.getElementById('criar-tarefa');
  const orderList = document.getElementById('lista-tarefas');

  buttonAddTask.addEventListener('click', createTask);
  orderList.addEventListener('click', createSelected);
}

window.onload = () => {
  init();
};
