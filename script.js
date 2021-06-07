let taskList = document.querySelector('#lista-tarefas');
const taskButton = document.querySelector('#criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
let listItem;
const btnRemoveList = document.getElementById('apaga-tudo');
const btnRemoveTask = document.getElementById('remover-finalizados');
const btnRemoveSelected = document.getElementById('remover-selecionado');

function listMaker() {
  const inputText = taskInput.value;
  listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerText = inputText;
  taskList.appendChild(listItem);
  taskInput.value = '';
}

taskButton.addEventListener('click', listMaker);

/* Consultado em: plantão do Panta e com dicas do Fábio Juvenal e Guilherme Tenari */
function selectedItem(event) {
  const liArray = document.getElementsByTagName('li');
  for (let index = 0; index < liArray.length; index += 1) {
    if (event.target.classList.contains('task')) {
      if (liArray[index].classList.contains('selected')) {
        liArray[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  }
  if (event.target.classList.contains('task')) {
    event.target.classList.add('selected');
  }
}

taskList.addEventListener('click', selectedItem);

taskButton.addEventListener('click', listMaker);

function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', taskCompleted);

/* Consultado em: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript */
function removeList() {
  taskList = document.querySelector('#lista-tarefas');
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
}

btnRemoveList.addEventListener('click', removeList);

/* Consultado em: https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom */
function removeTask() {
  const completedTasks = document.getElementsByClassName('completed');
  while (completedTasks[0]) {
    completedTasks[0].parentNode.removeChild(completedTasks[0]);
  }
}

btnRemoveTask.addEventListener('click', removeTask);

/* Requisito 12 */

/* Requisito 13 */

function removeSelected() {
  const selectedElement = document.querySelector('.selected');
  selectedElement.parentNode.removeChild(selectedElement);
}

btnRemoveSelected.addEventListener('click', removeSelected);
