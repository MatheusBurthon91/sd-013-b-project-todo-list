function addTasks() {
  const inputTask = document.getElementById('texto-tarefa');
  const olTask = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  if (inputTask.value.trim() !== '') {
    li.innerText = inputTask.value;
    olTask.appendChild(li);
    inputTask.value = '';
  } else return alert('Digite algo doido!');
}
document.getElementById('criar-tarefa').addEventListener('click', addTasks);
