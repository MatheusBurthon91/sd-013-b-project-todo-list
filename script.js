const button = document.querySelector('#criar-tarefa');
const secondButton = document.querySelector('#apaga-tudo');

function setClass(element) {
  element.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
      element.classList.add('selected');
      selectedItem.classList.remove('selected');
    } else {
      element.classList.add('selected');
    }
  });
}

function riskTask(element) {
  element.addEventListener('dblclick', () => {
    if (element.classList.contains('completed')) {
      element.classList.remove('completed');
    } else {
      element.classList.add('completed');
    }
  });
}

function setTask() {
  const input = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerText = input.value;
  item.className = 'item';
  input.value = '';
  const lista = document.querySelector('#lista-tarefas');
  lista.appendChild(item);
  setClass(item);
  riskTask(item);
}

button.addEventListener('click', setTask);

function clearTasks() {
  const itens = document.querySelectorAll('li');
  if (itens.length > 0) {
    for (let index = 0; index < itens.length; index += 1) {
      itens[index].remove();
    }
  }
}

secondButton.addEventListener('click', clearTasks);
