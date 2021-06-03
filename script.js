const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnRemoveFinalizados = document.getElementById('remover-finalizados');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
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

function createTarefa(tarefa, classe) {
  const li = document.createElement('li');
  li.innerText = tarefa;
  li.className = classe;
  olListaTarefas.appendChild(li);
  clearInputTextoTarefa();
  construaLiClicavel();
}

function createTarefaBtn() {
  const tarefa = inputTextoTarefa.value;
  const classe = 'tarefa';
  createTarefa(tarefa, classe);
  inputTextoTarefa.focus();
}

function clearAllTarefas() {
  for (let index = 0; index < tarefas.length; index += 1) {
    const currentTarefa = tarefas[index];
    currentTarefa.parentNode.removeChild(currentTarefa);
  }
}

function clearCompletedTarefa() {
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].className.includes(' completed')) {
      const currentTarefa = tarefas[index];
      currentTarefa.parentNode.removeChild(currentTarefa);
    }
  }
}

function saveAllTarefas() {
  getTarefas();
  const session = {
    tarefas: [],
  };
  for (let index = 0; index < tarefas.length; index += 1) {
    session.tarefas.push({ tarefa: tarefas[index].innerText, class: tarefas[index].className });
  }
  localStorage.setItem('session', JSON.stringify(session));
}

function restoredSession() {
  const atualSession = JSON.parse(localStorage.getItem('session'));
  for (let index = 0; index < atualSession.tarefas.length; index += 1) {
    const tarefaAtual = atualSession.tarefas[index].tarefa;
    const classeAtual = atualSession.tarefas[index].class;
    createTarefa(tarefaAtual, classeAtual);
  }
}

btnCriarTarefa.addEventListener('click', createTarefaBtn);

btnApagaTudo.addEventListener('click', clearAllTarefas);

btnRemoveFinalizados.addEventListener('click', clearCompletedTarefa);

btnSalvarTarefas.addEventListener('click', saveAllTarefas);

window.onload = function() {
  restoredSession();
  getTarefas();
};
