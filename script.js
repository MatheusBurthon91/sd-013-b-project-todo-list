function createLi() {
  const li = document.createElement('li');
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  li.innerText = input.value;
  li.className = 'tarefa';
  ol.appendChild(li);
  input.value = '';
}

function addEventListenerButton() {
  const addElementButton = document.getElementById('criar-tarefa');
  addElementButton.addEventListener('click', createLi);
}

window.onload = () => {
  addEventListenerButton();
};
