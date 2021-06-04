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
function clearTask() {
  const tasks = document.querySelector('#lista-tarefas').children;
  for (let i = tasks.length - 1; i >= 0; i -= 1) { // essa linha de codigo foi feita baseada no projeto do pedro spelta. Tentei fazer do indice 0 ate o ultimo, mas so apagava metade. Do ultimo ate o primeiro apaga todos.
    tasks[i].remove();
  }
}
function clearCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let i = completed.length - 1; i >= 0; i -= 1) {
    completed[i].remove();
  }
}
function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}
function addEventListener() { // cria o event listener nas li's
  const ol = document.querySelector('#lista-tarefas');
  const clearAll = document.querySelector('#apaga-tudo');
  const removeButton = document.querySelector('#remover-finalizados');
  const removeSelectedButton = document.querySelector('#remover-selecionado');
  ol.addEventListener('click', selectedTask);
  ol.addEventListener('dblclick', completedTask);
  clearAll.addEventListener('click', clearTask);
  removeButton.addEventListener('click', clearCompleted);
  removeSelectedButton.addEventListener('click', removeSelected);
}

window.onload = () => {
  addEventListenerButton();
  addEventListener();
};
