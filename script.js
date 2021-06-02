const taskList = document.getElementById('lista-tarefas');
// global functions
function loadStorage() {
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
      const newTask = document.createElement('li');
      taskList.appendChild(newTask);
      newTask.outerHTML = localStorage.getItem(`item${index}`);
    }
  }
}
// events
document.getElementById('criar-tarefa').addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
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
  const otherItems = document.getElementsByClassName('list-item');
  const itemClicked = listItem.target;
  if (itemClicked.classList.contains('list-item')) {
    for (let index = 0; index < otherItems.length; index += 1) {
      otherItems[index].classList.remove('selected');
    }
    itemClicked.classList.add('selected');
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
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    localStorage.clear();
  }
});
document.getElementById('remover-finalizados').addEventListener('click', () => {
  const completedItems = document.getElementsByClassName('completed');
  console.log(completedItems);
  while (completedItems.length !== 0) {
    completedItems[0].remove();
  }
});
document.getElementById('salvar-tarefas').addEventListener('click', () => {
  const allItems = document.getElementsByClassName('list-item');
  console.log(allItems);
  for (let index = 0; index < allItems.length; index += 1) {
    localStorage.setItem(`item${index}`, allItems[index].outerHTML);
  }
  alert('Seus itens foram salvos!');
});
document.getElementById('mover-cima').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    const selectedContent = selectedTask.outerHTML;
    const upperTask = selectedTask.previousElementSibling;
    if (upperTask === null) {
      alert('Essa tarefa ja esta no topo da lista.');
    } else {
      selectedTask.outerHTML = upperTask.outerHTML;
      upperTask.outerHTML = selectedContent;
    }
  } else {
    alert('Nenhuma tarefa foi selecionada');
  }
});
document.getElementById('mover-baixo').addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    const selectedContent = selectedTask.outerHTML;
    const lowerTask = selectedTask.nextElementSibling;
    if (lowerTask === null) {
      alert('Essa tarefa ja esta na base da lista.');
    } else {
      selectedTask.outerHTML = lowerTask.outerHTML;
      lowerTask.outerHTML = selectedContent;
    }
  } else {
    alert('Nenhuma tarefa foi selecionada');
  }
});

window.onload = loadStorage;
