const inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnRemoveFinalizados = document.getElementById('remover-finalizados');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');
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
    allTarefas: [],
  };
  for (let index = 0; index < tarefas.length; index += 1) {
    session.allTarefas.push({ tarefa: tarefas[index].innerText, class: tarefas[index].className });
  }
  localStorage.setItem('session', JSON.stringify(session));
}

function restoredSession() {
  const atualSession = JSON.parse(localStorage.getItem('session'));
  for (let index = 0; index < atualSession.allTarefas.length; index += 1) {
    const tarefaAtual = atualSession.allTarefas[index].tarefa;
    const classeAtual = atualSession.allTarefas[index].class;
    createTarefa(tarefaAtual, classeAtual);
  }
  getTarefas();
}

function moveTarefaCima() {
  let tarefaSelecionada = 0;
  let tarefaSelecionadaName = '';
  let tarefaSelecionadaClass = '';
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].className.includes(' selected')) {
      tarefaSelecionada = index;
      tarefaSelecionadaName = tarefas[index].innerText;
      tarefaSelecionadaClass = tarefas[index].className;
    }
  }
  if (tarefaSelecionada !== 0) {
    tarefas[tarefaSelecionada].innerText = tarefas[tarefaSelecionada - 1].innerText;
    tarefas[tarefaSelecionada].className = tarefas[tarefaSelecionada - 1].className;
    tarefas[tarefaSelecionada - 1].innerText = tarefaSelecionadaName;
    tarefas[tarefaSelecionada - 1].className = tarefaSelecionadaClass;
  }
}

function moveTarefaBaixo() {
  let tarefaSelecionada = tarefas.length - 1;
  let tarefaSelecionadaName = '';
  let tarefaSelecionadaClass = '';
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].className.includes(' selected')) {
      tarefaSelecionada = index;
      tarefaSelecionadaName = tarefas[index].innerText;
      tarefaSelecionadaClass = tarefas[index].className;
    }
  }
  if (tarefaSelecionada !== tarefas.length - 1) {
    tarefas[tarefaSelecionada].innerText = tarefas[tarefaSelecionada + 1].innerText;
    tarefas[tarefaSelecionada].className = tarefas[tarefaSelecionada + 1].className;
    tarefas[tarefaSelecionada + 1].innerText = tarefaSelecionadaName;
    tarefas[tarefaSelecionada + 1].className = tarefaSelecionadaClass;
  }
}

btnCriarTarefa.addEventListener('click', createTarefaBtn);

btnApagaTudo.addEventListener('click', clearAllTarefas);

btnRemoveFinalizados.addEventListener('click', clearCompletedTarefa);

btnSalvarTarefas.addEventListener('click', saveAllTarefas);

btnMoverCima.addEventListener('click', moveTarefaCima);

btnMoverBaixo.addEventListener('click', moveTarefaBaixo);

// Conteúdo encontrado no https://stackoverflow.com/questions/20180251/when-to-use-window-onload
window.addEventListener('load', () => {
  if (localStorage.length !== 0) {
    restoredSession();
  }
}, false);
