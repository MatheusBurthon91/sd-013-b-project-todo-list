const createTaskBtn = document.getElementById('criar-tarefa');

function createTask () {
  const inputText = document.getElementById('texto-tarefa');
  const taskListOl = document.getElementById('lista-tarefas');
  const li = document.createElement('li');

  li.innerText = inputText.value;
  taskListOl.appendChild(li);
  inputText.value = '';
  console.log(inputText);
}

window.onload = function () {

  createTaskBtn.addEventListener('click', createTask);
 
};