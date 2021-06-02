const adTarefa = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const tarefaLista = document.querySelector('#lista-tarefas');

function addTarefa(tarefa) {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerHTML = tarefa;
  tarefaLista.appendChild(novaTarefa);
}

adTarefa.addEventListener('click', (e) => {
  if (input.value !== '') {
    addTarefa(input.value);
    input.value = '';
  }
});