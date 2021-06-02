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
    console.log('Entrou na primeira');
    event.target.className = 'completed';
  } else if (event.target.className === 'completed') {
    console.log('Entrou na segunda');
    event.target.className = '';
  }
});
