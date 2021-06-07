const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

// Adicionar as tarefas na lista
function addTask() {
  button.addEventListener('click', function () {
    if (input.value === '') {
      alert('Adicione uma tarefa!!!');
    } else {
      const liCreate = document.createElement('li');
      ol.appendChild(liCreate);
      liCreate.innerText = input.value;
      input.value = '';
    }
  });
}
addTask();

// Mudar a cor do background ao clicar em um item da lista
const li = document.getElementsByTagName('li');
function changeBackgroundList() {
  ol.addEventListener('click', function (event) {
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].className.includes('cinza')) {
        li[index].classList.remove('cinza');
      }
      if (li[index].className !== 'cinza') {
        event.target.classList.add('cinza');
      }
    }
  });
}
changeBackgroundList();

// Riscar a tarefa que foi completada
function strikeOutCompletedTask() {
  ol.addEventListener('dblclick', function (event) {
    const element = event.target;
    if (element.className.includes('completed')) {
      element.classList.remove('completed');
    } else {
      element.classList.add('completed');
    }
  });
}
strikeOutCompletedTask();

// Botão para limpar tudo
const buttonClean = document.getElementById('apaga-tudo');

function buttonToCleanAll() {
  buttonClean.addEventListener('click', function () {
    ol.innerHTML = '';
  });
}
buttonToCleanAll();

// Botão para remover tarefas finalizadas
const buttonRemoveTasks = document.getElementById('remover-finalizados');

function removeTasksFinished() {
  buttonRemoveTasks.addEventListener('click', function () {
    for (let index = li.length - 1; index >= 0; index -= 1) {
      if (li[index].className.includes('completed')) {
        li[index].remove('.completed');
      }
    }
  });
}
removeTasksFinished();

// Botão para salvar tarefas no localStorage
const buttonSaveTasks = document.getElementById('salvar-tarefas');

function saveTasks() {
  buttonSaveTasks.addEventListener('click', function () {
    let cont = 0;
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].className.includes('completed')) {
        cont += 1;
      }
    }
    if (cont >= 1) {
      localStorage.setItem('task', ol.innerHTML);
    }
  });
}
saveTasks();

// Pegar o resultado da função anterior e deixar visível no browser
window.onload = function showSalvedDatas() {
  const importSalvedTasks = localStorage.getItem('task');
  if (importSalvedTasks) {
    ol.innerHTML = importSalvedTasks;
  }
};
