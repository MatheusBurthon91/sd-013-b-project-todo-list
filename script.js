const containerTasks = document.getElementById('container-tasks');

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
inputTasks.type = 'text';
inputTasks.placeholder = 'Digite aqui sua tarefa...';
inputTasks.size = '50';
containerTasks.appendChild(inputTasks);

const ordemList = document.createElement('ol');
ordemList.id = 'lista-tarefas';
containerTasks.appendChild(ordemList);
