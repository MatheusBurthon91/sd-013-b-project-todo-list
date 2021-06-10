const list = document.getElementById('lista-tarefas');

function addItem() {
  const li = document.createElement('li');
  li.setAttribute('class', 'li-style');
  list.appendChild(li);
  const task = document.getElementById('texto-tarefa').value;
  const text = document.createTextNode(task);
  li.appendChild(text);
  document.getElementById('texto-tarefa').value = '';
}
const createBtn = document.getElementById('criar-tarefa');
createBtn.addEventListener('click', addItem);

function selected(event) {
  const select = document.getElementsByClassName('li-style');
  for (let index = 0; index < select.length; index += 1) {
    const selectColor = select[index];
    selectColor.style.backgroundColor = '';
  }
  const events = event.target;
  events.style.backgroundColor = 'rgb(128, 128, 128)';
}
list.addEventListener('click', selected);

function completed(event) {
  const complete = event.target;
  if (complete.classList.contains('completed')) {
    complete.classList.remove('completed');
  } else {
    complete.classList.add('completed');
  }
}
list.addEventListener('dblclick', completed);

function reset() {
  const remove = document.getElementById('lista-tarefas');
  remove.innerHTML = '';
}
const eraseBtn = document.getElementById('apaga-tudo');
eraseBtn.addEventListener('click', reset);

// https://stackoverflow.com/questions/4777077/removing-elements-by-class-name
function removeCompleted() {
  const itensCompleted = document.getElementsByClassName('completed');
  console.log(itensCompleted[0]);
  while (itensCompleted.length > 0) {
    itensCompleted[0].parentNode.removeChild(itensCompleted[0]);
  }
}
const eraseCompleteBtn = document.getElementById('remover-finalizados');
eraseCompleteBtn.addEventListener('click', removeCompleted);
