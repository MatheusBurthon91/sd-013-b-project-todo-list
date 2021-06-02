// Função que recuperar as tasks salvas
function recoverTasks(tasks) {
  const tasksToRecover = tasks;
  for (let index = 0; index < tasksToRecover.length; index += 1) {
    const newTaskRecovered = document.createElement('li');
    newTaskRecovered.innerText = tasksToRecover[index].text;
    newTaskRecovered.style.backgroundColor = tasksToRecover[index].backGroundStyle;
    newTaskRecovered.className = tasksToRecover[index].class;
    document.querySelector('#lista-tarefas').appendChild(newTaskRecovered);
  }
}

// Evento Onload que vai recurar as tasks armazenadas e carrega-las
window.onload = function () {
  const items = localStorage.getItem('Tasks') || [];
  if (items.length !== 0) {
    recoverTasks(JSON.parse(items));
  }
};

// Captura o texto do Input e armazena na variável 'text'
const task = document.querySelector('#texto-tarefa');
let text = '';
task.addEventListener('input', function (event) {
  text = event.target.value;
});

// Limpa o valor do input quando clica no campo
task.addEventListener('click', function () {
  task.value = '';
});

// Cria uma nova 'li' contendo o texto do input e agrega na lista ordenada
function newTask(inputText) {
  const taskText = inputText;
  const newLi = document.createElement('li');
  newLi.innerText = taskText;
  document.querySelector('#lista-tarefas').appendChild(newLi);
}

// Botão 'Adicionar" recebe o texto do input e envia para Lista Ordenada
const btnAdd = document.querySelector('#criar-tarefa');
btnAdd.addEventListener('click', function () {
  newTask(text);
  task.value = '';
});

// Função para mudar o Background Color das Tasks
const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', function (event) {
  if (taskList.children.length > 0) {
    for (let index = 0; index < taskList.children.length; index += 1) {
      taskList.children[index].style.backgroundColor = '';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

// Função para riscar tarefa da lista
taskList.addEventListener('dblclick', function (event) {
  if (event.target.className === '') {
    event.target.className = 'completed';
  } else if (event.target.className === 'completed') {
    event.target.className = '';
  }
});

// Implementa a função de apagar tudo quando clica no botão 'Apagar Tudo'
const btnDeleteAll = document.querySelector('#apaga-tudo');
btnDeleteAll.addEventListener('click', function () {
  if (taskList.children.length === 0) {
    alert('Não existe nenhuma tarefa na sua lista');
  } else {
    const taskListLength = taskList.children.length;
    for (let index = 0; index < taskListLength; index += 1) {
      taskList.lastElementChild.remove();
    }
  }
});

// Implementa função para o botão 'Remover Finalizadas'"
const btnDeleteCompleted = document.querySelector('#remover-finalizados');
btnDeleteCompleted.addEventListener('click', function () {
  const completedTasks = document.querySelectorAll('.completed');
  if (completedTasks.length === 0) {
    alert('Não há nenhuma tarefa concluída!');
  } else {
    const completedTasksLength = document.querySelectorAll('.completed').length;
    for (let index = 0; index < completedTasksLength; index += 1) {
      const childForRemove = completedTasks[index];
      taskList.removeChild(childForRemove);
    }
  }
});

// FUNÇÕES BONUS
// Função para Salvar as tasks em uma array. Referências: https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/getItem e https://www.horadecodar.com.br/2020/07/21/como-salvar-um-objeto-na-localstorage/
const savedTasks = [];
const taskChildren = taskList.children;
const btnSave = document.querySelector('#salvar-tarefas');
btnSave.addEventListener('click', function () {
  for (let index = 0; index < taskChildren.length; index += 1) {
    const label = taskChildren[index].innerText;
    const style = taskChildren[index].style.backgroundColor;
    const nameOfClass = taskChildren[index].className;
    savedTasks.push({ text: label, backGroundStyle: style, class: nameOfClass });
  }
  localStorage.setItem('Tasks', JSON.stringify(savedTasks));
});
