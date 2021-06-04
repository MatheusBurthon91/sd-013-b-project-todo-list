const h1 = document.createElement('h1');

document.querySelector('header').appendChild(h1);

const divFunction = document.body.children[1];

divFunction.setAttribute('id', 'funcionamento');

const inputSelect = document.querySelector('input');

inputSelect.setAttribute('id', 'texto-tarefa');

const olSelect = document.querySelector('ol');

const funcId = document.getElementById('funcionamento');

const buttonSelect = document.querySelector('button');

h1.innerText = 'Minha Lista de Tarefas';

funcId.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

olSelect.setAttribute('id', 'lista-tarefas');

buttonSelect.setAttribute('id', 'criar-tarefa');

const olId = document.querySelector('#lista-tarefas');

buttonSelect.addEventListener('click', () => {
  const liCreat = document.createElement('li');
  const input = document.querySelector('input').value;
  olId.appendChild(liCreat).innerText = input;
  document.querySelector('input').value = '';
});

olId.addEventListener('click', (event) => {
  // const listOfTasks = document.getElementsByTagName('li');
  const taskId = document.getElementsByClassName('taskSelected');
  if (taskId !== []) {
    for (let index = 0; index < taskId.length; index += 1) {
      taskId[index].classList.remove('taskSelected');
    }
  }
  event.target.classList.add('taskSelected');
});

olId.addEventListener('dblclick', (event) => {
  const selectCompleted = event.target.classList.value;
  if (selectCompleted === 'taskSelected') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
});
