const buttonTaskCreated = document.querySelector('#criar-tarefa');
const txtInput = document.querySelector('#texto-tarefa');
const tasksList = document.querySelector('#lista-tarefas');

function createTask(task, classOfTask) {
  const listItem = document.createElement('li');
  listItem.innerText = task;
  listItem.className = classOfTask;
  tasksList.appendChild(listItem);
  txtInput.value = ''; // call the function to clear the input
}

function createTaskBtn() {
  const task = txtInput.value;
  const classOfTask = 'tarefa';
  createTask(task, classOfTask);
}

let allTasks = tasksList.children;
console.log(allTasks);

function selectItem(event) {
  const clickItem = event.target; // pega o evento click
  clickItem.classList.add('selecionado'); // add classe selecionado

  for (let index = 0; index < allTasks.length; index += 1) {
    if (allTasks[index] !== clickItem) {
      allTasks[index].classList.remove('selecionado');
    }
  }
}

buttonTaskCreated.addEventListener('click', createTaskBtn);
allTasks.addEventListener('click', selectItem);
