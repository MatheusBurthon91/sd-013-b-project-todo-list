const createTaskBtn = document.getElementById('criar-tarefa');
const taskListOl = document.getElementById('lista-tarefas');

function createTask () {

  const inputText = document.getElementById('texto-tarefa');
  const li = document.createElement('li');

  li.addEventListener('click', selectTaskLi);

  li.className = 'li-task';
  li.innerText = inputText.value;
  taskListOl.appendChild(li);
  inputText.value = '';

}

const getTaskLi = document.querySelectorAll('.li-task');

function selectTaskLi(event) {
  const eventTarget = event.target
  console.log(eventTarget);

  if (eventTarget.style.backgroundColor === 'rgb(128, 128, 128)') {
    eventTarget.style.backgroundColor = '';
  } else {

    eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  
}

window.onload = function () {

  createTaskBtn.addEventListener('click', createTask);
 
};
