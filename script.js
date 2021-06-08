// Requisito 5 e 6

const list = document.querySelector('#lista-tarefas');
const addTask = document.querySelector('#criar-tarefa');

function createTask() {
  const addLine = document.createElement('li');
  addLine.className = 'item';
  addLine.innerText = document.querySelector('#texto-tarefa').value;
  list.appendChild(addLine);
  document.getElementById('texto-tarefa').value = '';
  addLine.addEventListener('click', (event) => {
    const selecionado = document.querySelector('.li-selected');
    if (selecionado !== null) {
      selecionado.classList.remove('li-selected');
    }
    event.target.classList.add('li-selected');
  });
}

addTask.addEventListener('click', createTask);
