const button = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

function addTask() {
  button.addEventListener('click', function () {
    const liCreate = document.createElement('li');
    ol.appendChild(liCreate);
    liCreate.innerText = input.value;
    input.value = '';
  });
}

addTask();
