const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const olListaTarefas = document.getElementById('lista-tarefas');

function clearInputTextoTarefa() {
  inputTextoTarefa.value = '';
}

let tarefas = document.querySelectorAll('.tarefa');

function getTarefas() {
  tarefas = document.querySelectorAll('.tarefa');
}

function clearSelected() {
  for (let index = 0; index < tarefas.length; index += 1) {
    const classeItem = tarefas[index].className;
    tarefas[index].className = classeItem.replace(/selected/, '');
  }
}

function selectTarefa(event) {
  // adicionar a classe selected para a li clicada
  // 1. retira a classe selected de todas as li
  clearSelected();
  // 2. adiciona a classe selected à li clicada
  getTarefas();
  const tarefaClicada = event.target;
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index] === tarefaClicada) {
      tarefas[index].className += ' selected';
    }
  }
}

function completedTarefa(event) {
  const tarefaClicada = event.target;
  const classeTarefaClicada = tarefaClicada.className;
  if (classeTarefaClicada.includes(' completed')) {
    tarefaClicada.className = classeTarefaClicada.replace(/completed/, '');
  } else {
    tarefaClicada.className += ' completed';
  }
}

function construaLiClicavel() {
  getTarefas();
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click', selectTarefa);
    tarefas[index].addEventListener('dblclick', completedTarefa);
  }
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

function clearAllTarefas() {
  for (let index = 0; index < tarefas.length; index += 1) {
    const currentTarefa = tarefas[index];
    currentTarefa.parentNode.removeChild(currentTarefa);
  }
}

btnCriarTarefa.addEventListener('click', createTarefa);

btnApagaTudo.addEventListener('click', clearAllTarefas);
