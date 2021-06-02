const olTask = document.getElementById('lista-tarefas');
const liItems = document.getElementById('lista-tarefas').children;
const inputTask = document.getElementById('texto-tarefa');

function addTasks() {
  const li = document.createElement('li');
  if (inputTask.value.trim() !== '') {
    li.innerText = inputTask.value;
    olTask.appendChild(li);
    inputTask.value = '';
  } else return alert('Digite algo doido!');
}
document.getElementById('criar-tarefa').addEventListener('click', addTasks);

// fonte: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
inputTask.addEventListener('keyup', (params) => {
  if (params.keyCode === 13) {
    document.getElementById('criar-tarefa').click();
  }
});

function changeBgColor(event) {
  for (let index = 0; index < liItems.length; index += 1) {
    if (liItems[index].classList.contains('selected')) {
      liItems[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
olTask.addEventListener('click', changeBgColor);

function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else event.target.classList.add('completed');
}

olTask.addEventListener('dblclick', lineThrough);

function deleteAll() {
  olTask.innerHTML = '';
}
document.getElementById('apaga-tudo').addEventListener('click', deleteAll);

function deleteCompletedTasks(params) {
  const childs = olTask.children;
  for (let index = 0; index < childs.length; index += 1) {
    if (childs[index].classList.contains('completed')) {
      olTask.removeChild(childs[index]);
    }
  }
}
document
  .getElementById('remover-finalizados')
  .addEventListener('click', deleteCompletedTasks);
