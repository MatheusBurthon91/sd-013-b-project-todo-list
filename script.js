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

function newClass(event) {
  const tasks = document.querySelectorAll('.tarefa'); // sempre que for um array percorre ele com o for
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addNewClassEventListener() {
  const ol = document.querySelector('#lista-tarefas');
  ol.addEventListener('click', newClass);
}

/*
function addListaDeTarefasEventListener() {
  const ol = document.querySelector('#lista-tarefas');
  ol.addEventListener('click', setNewColor);
}
*/

window.onload = () => {
  addEventListenerButton();
  addNewClassEventListener();
};
