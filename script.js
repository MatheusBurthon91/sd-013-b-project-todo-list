const containerTasks = document.getElementById('container-tasks');

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
inputTasks.type = 'text';
inputTasks.placeholder = 'Digite aqui sua tarefa...';
inputTasks.size = '50';
inputTasks.className = 'item-container';
containerTasks.appendChild(inputTasks);

const btnCreateTasks = document.createElement('button');
btnCreateTasks.id = 'criar-tarefa';
btnCreateTasks.innerText = 'Adiconar';
btnCreateTasks.className = 'item-container';
containerTasks.appendChild(btnCreateTasks);

const ordemList = document.createElement('ol');
ordemList.id = 'lista-tarefas';
containerTasks.appendChild(ordemList);

btnCreateTasks.addEventListener('click', () => {
  const itemList = document.createElement('li');
  itemList.innerText = inputTasks.value;
  itemList.className = 'item-list';
  ordemList.appendChild(itemList);
  inputTasks.value = '';
  localStorage.setItem('tasks', itemList.innerText);
});
