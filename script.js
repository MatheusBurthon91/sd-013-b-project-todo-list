const button = document.querySelector('#criar-tarefa');

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

function setTask() {
  const input = document.querySelector('#texto-tarefa');
  const item = document.createElement('li');
  item.innerText = input.value;
  item.className = 'item';
  input.value = '';
  const lista = document.querySelector('#lista-tarefas');
  lista.appendChild(item);
  setClass(item);
}

button.addEventListener('click', setTask);
