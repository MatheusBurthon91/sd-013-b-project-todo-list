// Requisito 5 e 6

const list = document.querySelector('#lista-tarefas');
const addTask = document.querySelector('#criar-tarefa');

// eslint-disable-next-line max-lines-per-function
function createTask() {
  const removeTasks = document.querySelector('#apaga-tudo');
  const addLine = document.createElement('li');
  const removeCompleted = document.querySelector('#remover-finalizados');

  addLine.classList.add('task');
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

  addLine.addEventListener('dblclick', (event) => {
    event.target.classList.add('completed');
    addLine.addEventListener('dblclick', () => {
      addLine.classList.remove('completed');
    });
  });

  removeTasks.addEventListener('click', () => {
    if (addLine !== null) {
      list.removeChild(addLine);
    }
  });

  removeCompleted.addEventListener('click', () => {
    const completed = document.querySelector('.completed');
    if (completed !== null) {
      list.removeChild(completed);
    }
  });
}
addTask.addEventListener('click', createTask);
