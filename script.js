window.onload = function() {
  const button = document.getElementById('criar-tarefa');
  const tarefa = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');

  button.addEventListener('click', function() {
    let novaTarefa = tarefa.value;
    tarefa.value = '';
    let listaTarefa = document.createElement('li');
    listaTarefa.innerText = novaTarefa
    lista.appendChild(listaTarefa);
  })
}
