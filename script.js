const inputText = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const olTaskList = document.getElementById('lista-tarefas');
const btnDeleteTask = document.getElementById('apaga-tudo');

function clearSelected() {
  const taskCreated = document.querySelectorAll('.task');
  for (let index = 0; index < taskCreated.length; index += 1) {
    const itemSelected = taskCreated[index].className;
    taskCreated[index].className = itemSelected.replace(/-item-selected/, '');
  }
}

function taskSelected(event) {
  const taskCreated = document.querySelectorAll('.task');
  clearSelected();
  // console.log("entrou")
  const selected = event.target;
  for (let index = 0; index < taskCreated.length; index += 1) {
    if (taskCreated[index] === selected) {
      selected.classList.toggle('task-item-selected');
    }
  }
}

function completedTask(event) {
  const taskClick = event.target;
  const classTaskClick = taskClick.className;
  if (classTaskClick.includes(' completed')) {
    taskClick.className = classTaskClick.replace(/completed/, '');
  } else {
    taskClick.className += ' completed';
  }
}

function createClickable() {
  const taskCreated = document.querySelectorAll('.task');
  for (let index = 0; index < taskCreated.length; index += 1) {
    taskCreated[index].addEventListener('click', taskSelected);
    taskCreated[index].addEventListener('dblclick', completedTask);
  }
}

function createTask() {
  const task = inputText.value;
  const li = document.createElement('li');
  li.className = 'task';
  li.innerText = task;
  olTaskList.appendChild(li);
  inputText.value = '';
  inputText.focus();
  createClickable();
}

function deleteTask() {
  const lista = document.getElementsByTagName('section')[1];
  const itens = lista.getElementsByTagName('ol');
  lista.removeChild(itens[0]);
  document.location.reload(true);
}

btnCreateTask.addEventListener('click', createTask);
btnDeleteTask.addEventListener('click', deleteTask);
