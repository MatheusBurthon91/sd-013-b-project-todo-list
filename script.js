const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

// Adicionar as tarefas na lista
function addTask() {
  button.addEventListener('click', function () {
    const liCreate = document.createElement('li');
    ol.appendChild(liCreate);
    liCreate.innerText = input.value;
    input.value = '';
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
