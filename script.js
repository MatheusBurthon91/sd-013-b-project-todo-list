function addTarefa() {
  const inp = document.getElementById('texto-tarefa');
  const tarefa = inp.value;
  const item = document.createElement('li');
  item.innerText = tarefa;
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.appendChild(item);
  inp.value = '';
}
const botaoAdd = document.getElementById('criar-tarefa');
botaoAdd.addEventListener('click', addTarefa);

function select(event) {
  const tarefas = document.getElementsByTagName('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    const tarefa = tarefas[index];
    tarefa.className = '';
  }
  event.target.className = 'selected';
}
const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.addEventListener('click', select);
