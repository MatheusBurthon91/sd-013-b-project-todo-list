document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  // criar uma li
  const newTask = document.createElement('li');
  newTask.classList.add('list-item');
  // colocar o texto do input na li
  newTask.innerText = input.value;
  // colocar li na ol com a lista de tarefas
  taskList.appendChild(newTask);
  // resetar o texto
  input.value = '';
});

document.addEventListener('click', (listItem) => {
  const itemClicked = listItem.target;
  const otherItems = document.getElementsByClassName('list-item');
  if (itemClicked.classList.contains('list-item')) {
    for (let index = 0; index < otherItems.length; index += 1) {
      otherItems[index].style.backgroundColor = 'white';
    }
    itemClicked.style.backgroundColor = 'grey';
  }
});
