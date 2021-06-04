function createLi() { // cria o elemento li com a classe tarefa, reseta sempre que a li for criada
  const li = document.createElement('li');
  const ol = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  li.innerText = input.value;
  li.className = 'tarefa';
  ol.appendChild(li);
  input.value = '';
}
function addEventListenerButton() { // cria o event listener no botao de adicionar
  const addElementButton = document.getElementById('criar-tarefa');
  addElementButton.addEventListener('click', createLi);
}
function selectedTask(event) { // cria a classe selected
  const tasks = document.querySelectorAll('.tarefa'); // sempre que for um array percorre ele com o for
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
function addSelectedEventListener() { // cria o event listener nas li's
  const ol = document.querySelector('#lista-tarefas');
  ol.addEventListener('click', selectedTask);
  ol.addEventListener('dblclick', completedTask);
}

window.onload = () => {
  addEventListenerButton();
  addSelectedEventListener();
};
