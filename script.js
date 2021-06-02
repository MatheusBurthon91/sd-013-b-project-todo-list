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
