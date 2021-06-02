// Captura o texto do Input e armazena na variável 'text'
const task = document.querySelector('#texto-tarefa');
let text = '';
task.addEventListener('input', function (event) {
  text = event.target.value;
});

// Limpa o valor do input quando clica no campo
task.addEventListener('dblclick', function () {
  task.value = '';
});

// Botão 'Adicionar" recebe o texto do input e envia para Lista Ordenada
const btnAdd = document.querySelector('#criar-tarefa');
btnAdd.addEventListener('click', function () {
  newTask(text);
  task.value = 'Digite aqui sua tarefa!';
});

// Cria uma nova 'li' contendo o texto do input e agrega na lista ordenada
function newTask(inputText) {
  const taskText = inputText;
  const newLi = document.createElement('li');
  newLi.innerText = taskText;
  document.querySelector('#lista-tarefas').appendChild(newLi);
}