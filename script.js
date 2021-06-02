document.getElementById('criar-tarefa').addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  const taskList = document.getElementById('lista-tarefas');
  //  uma li
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
document.addEventListener('dblclick', (listItem) => {
  const itemClicked = listItem.target;
  if (!itemClicked.classList.contains('completed') && itemClicked.classList.contains('list-item')) {
    itemClicked.classList.add('completed');
  } else if (itemClicked.classList.contains('list-item')) {
    itemClicked.classList.remove('completed');
  }
});
document.getElementById('apaga-tudo').addEventListener('click', () => {
  const list = document.getElementById('lista-tarefas');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
document.getElementById('remover-finalizados').addEventListener('click', () => {
  const completedItems = document.getElementsByClassName('completed');
  console.log(completedItems);
  while (completedItems.length !== 0) {
    completedItems[0].remove();
  }
});
