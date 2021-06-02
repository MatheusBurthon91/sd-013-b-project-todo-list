//Adiciona uma nova tarefa à lista de tarefa.
function adicionaTarefa(){
  input = document.getElementById('texto-tarefa');
  listaTarefas = document.getElementById('lista-tarefas');
  novaTarefa = document.createElement('li');

  nomeTarefa = input.value;

  novaTarefa.innerText = nomeTarefa;

  listaTarefas.appendChild(novaTarefa);

  input.value = '';
}