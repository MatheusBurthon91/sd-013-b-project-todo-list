document.querySelector('#criar-tarefa').addEventListener('click', () =>{
  const input = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  // criar uma li
  const newTask = document.createElement('li');
  // colocar o texto do input na li
  newTask.innerText = input.value;
  console.log(newTask);
  // colocar li na ol com a lista de tarefas
  taskList.appendChild(newTask);
  // resetar o texto
  input.value = '';
});
