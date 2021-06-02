const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');

function clearInputTextoTarefa() {
  inputTextoTarefa.value = '';
}

function createTarefa() {
  const tarefa = inputTextoTarefa.value;
  const li = document.createElement('li');
  li.innerText = tarefa;
  olListaTarefas.appendChild(li);
  clearInputTextoTarefa();
}

btnCriarTarefa.addEventListener('click', createTarefa);