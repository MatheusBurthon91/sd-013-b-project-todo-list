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

function changeSelected() {
  const listItem = document.getElementsByClassName('listItem');
  for (let key = 0; key < listItem.length; key += 1) {
    if (listItem[key].className === 'listItem selected') {
      listItem[key].classList.remove('selected');
      listItem[key].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

function createSelected(event) {
  const element = event.target;
  if (element.className === 'listItem') {
    changeSelected();
    element.style.backgroundColor = 'rgb(128, 128, 128)';
    element.classList.add('selected');
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
