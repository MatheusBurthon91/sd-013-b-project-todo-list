const createTaskBtn = document.getElementById('criar-tarefa');
const taskListOl = document.getElementById('lista-tarefas');
const deleteAllTasks = document.getElementById('apaga-tudo');

function createTask() {
  const inputText = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
  li.className = 'tarefas';

  li.addEventListener('click', selectTaskLi);

//  li.className = 'li-task';
  li.innerText = inputText.value;
  taskListOl.appendChild(li);
  inputText.value = '';

}

function selectTaskLi(event) {
  const allTasks = document.querySelectorAll('.tarefas');
  const clickedTask = event.target;

  for (let index = 0; index < allTasks.length; index += 1) {
    let currentTask = allTasks[index];
    
    if (currentTask === clickedTask) {
      clickedTask.classList.toggle('selected');
    } else {
      currentTask.classList.remove('selected');
    }
  }
}

window.onload = function () {
  createTaskBtn.addEventListener('click', createTask);
  taskListOl.addEventListener('dblclick', function(event) {
    const clickedTask = event.target;
    clickedTask.classList.toggle('completed');
  })
  deleteAllTasks.addEventListener('click', function() {
    // Source from Stackoverflow: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (taskListOl.firstChild) {
      taskListOl.removeChild(taskListOl.lastChild);
    }
  })
};
