const createTaskBtn = document.getElementById('criar-tarefa');
const taskListOl = document.getElementById('lista-tarefas');

function createTask () {

  const inputText = document.getElementById('texto-tarefa');
  const li = document.createElement('li');

  li.addEventListener('click', selectTaskLi);

//  li.className = 'li-task';
  li.innerText = inputText.value;
  taskListOl.appendChild(li);
  inputText.value = '';

}

function selectTaskLi(event) {
  const currentTask = document.querySelector('.selected');
  const clickedTask = event.target;

  if (clickedTask.classList.contains("selected")) {
    clickedTask.classList.remove('selected');

  } else {
    clickedTask.classList.add('selected');

  }

  console.log(currentTask);



  // if (eventTarget.style.backgroundColor === 'rgb(128, 128, 128)') {
  //   eventTarget.style.backgroundColor = '';
  // } else {

  //   eventTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  // }

  
}

window.onload = function () {

  createTaskBtn.addEventListener('click', createTask);
 
};
