function addTarefa() {
  const inp = document.getElementById('texto-tarefa');
  const tarefa = inp.value;
  const item = document.createElement('li');
  item.innerText = tarefa;
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.appendChild(item);
  inp.value = '';
  inp.focus();
}
const botaoAdd = document.getElementById('criar-tarefa');
botaoAdd.addEventListener('click', addTarefa);

function select(event) {
  const tarefas = document.getElementsByTagName('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    const tarefa = tarefas[index];
    tarefa.className = tarefa.className.replace('selected', '');
  }
  event.target.className += ' selected';
}
const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.addEventListener('click', select);

listaTarefas.addEventListener('dblclick', risco);

function risco(event) {
  if (event.target.classList.contains('completed')) {
    event.target.className = event.target.className.replace('completed', '');
  } else {
    event.target.className += ' completed';
  }
}

function apagaTudo() {
  const listaDeTarefas = document.getElementById('lista-tarefas');
  listaDeTarefas.innerText = '';
}
const botaoApaga = document.getElementById('apaga-tudo');
botaoApaga.addEventListener('click', apagaTudo);
