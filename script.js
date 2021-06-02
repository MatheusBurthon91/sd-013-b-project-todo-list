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
  li.className = 'tarefa';
  olListaTarefas.appendChild(li);
  clearInputTextoTarefa();
  inputTextoTarefa.focus();
  construaLiClicavel();
}

btnCriarTarefa.addEventListener('click', createTarefa);

let tarefas = document.querySelectorAll('.tarefa');

function getTarefas() {
  tarefas = document.querySelectorAll('.tarefa');
}

function selectTarefa(event) {
  // adicionar a classe selected para a li clicada
  const tarefaClicada = event.target;
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index] === tarefaClicada) {
      tarefas[index].className = 'tarefa selected';
    } else {
      tarefas[index].className = 'tarefa';
    }
  }
}

function construaLiClicavel() {
  getTarefas();
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', selectTarefa);
  }
}
