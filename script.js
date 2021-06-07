document.getElementById('criar-tarefa').addEventListener('click', function (){
  const inpuText = document.getElementById('texto-tarefa').value;
  const createLi = document.createElement('li');
  const getOl = document.getElementById('lista-tarefas');
  createLi.innerText = inpuText;
  getOl.appendChild(createLi);
  document.getElementById('texto-tarefa').value = '';
});

function removeBgColor() {
  const selectOl = document.querySelectorAll('li');
  for (let index = 0; index < selectOl.length; index += 1) {
    if (selectOl[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selectOl[index].style.backgroundColor = 'white';
      return;
    }
  }
}

function addClickColor(event) {
  const targ = event.target;
  removeBgColor();
  targ.style.backgroundColor = 'rgb(128, 128, 128)';
}

function taskCompleted(event) {
  const selectedLine = event.target;
  if (selectedLine.className === 'completed') {
    selectedLine.classList.remove('completed');
  } else {
    selectedLine.classList.add('completed');
  }
}

function emptyTasks () {
  const olSelect = document.querySelector('#lista-tarefas');
  olSelect.innerText = '';
}

function removingCompletedTasks () {
  const classSelects = document.querySelectorAll('.completed');
  for (const classSelect of classSelects) {
    classSelect.remove();
  }
}

const selectorA = document.querySelector('#lista-tarefas');
const buttonSelect = document.querySelector('#apaga-tudo');
const buttonSelect2 = document.querySelector('#remover-finalizados');
selectorA.addEventListener('click', addClickColor);
selectorA.addEventListener('dblclick', taskCompleted);
buttonSelect.addEventListener('click', emptyTasks);
buttonSelect2.addEventListener('click', removingCompletedTasks);
