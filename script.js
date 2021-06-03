const inputText = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const olTaskList = document.getElementById('lista-tarefas');



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

btnCreateTask.addEventListener('click', createTask);

function taskSelected(event) {
 let taskCreated = document.querySelectorAll('.task');
 clearSelected();
    //console.log("entrou")
    const selected = event.target;
   for (let index = 0; index < taskCreated.length; index += 1) {
       if (taskCreated[index] === selected) {
        selected.classList.toggle('task-item-selected')
       } 
      }
      }

function clearSelected(){
    let taskCreated = document.querySelectorAll('.task');
    for (index = 0; index < taskCreated.length; index += 1){
    const itemSelected = taskCreated[index].className
    taskCreated[index].className = itemSelected.replace(/-item-selected/, '');
    }
}

function createClickable() {
    let taskCreated = document.querySelectorAll('.task');
    for (let index = 0; index < taskCreated.length; index += 1) {
        taskCreated[index].addEventListener('click', taskSelected)
        taskCreated[index].addEventListener('dblclick', completedTask)
    }
}

function completedTask (event){
    const taskClick = event.target
    const classTaskClick = taskClick.className;
  if (classTaskClick.includes(' completed')) {
    taskClick.className = classTaskClick.replace(/completed/, '');
  } else {
    taskClick.className += ' completed';
  }
}

