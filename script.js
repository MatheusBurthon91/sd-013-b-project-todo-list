const taskButton = document.querySelector('#criar-tarefa');
const addTask = document.querySelector('#texto-tarefa');
// Adciona EventListener no butão que ao ser clicado
taskButton.addEventListener('click', function(){
  let newTask = document.createElement('li')
  if (addTask.value != '') {
    newTask.innerText = addTask.value;
    document.querySelector('#lista-tarefas').appendChild(newTask)
    addTask.value = '';
  }
})