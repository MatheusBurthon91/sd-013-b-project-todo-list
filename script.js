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

let taskCreated = document.querySelectorAll('.task');

//function getTasks(){
 //   let taskCreated = document.querySelectorAll('.task');
//}

function taskSelected(event) {
 //   getTasks();
    console.log("entrou")
    const selected = event.target;
    selected.className = 'task-item-selected'
  //  for (let index = 0; index < taskCreated.length; index += 1) {
   //     if (taskCreated[index] === selected) {
   //       taskCreated[index].className = 'tarefa selected';
  //      } else {
  //          taskCreated[index].className = 'tarefa';
   //       }
  //      }
      }

function createClickable() {
    let taskCreated = document.querySelectorAll('.task');
    for (let index = 0; index < taskCreated.length; index += 1) {
        taskCreated[index].addEventListener('click', taskSelected)
    }
}

