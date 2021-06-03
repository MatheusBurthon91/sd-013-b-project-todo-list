const buttonAdd = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const clearCheked = document.querySelector('#remover-finalizados');

buttonAdd.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  list.appendChild(li);
  li.innerHTML = input.value;
  input.value = '';
});

function classRemove() {
  const classTrue = document.getElementsByClassName('liSelectedColor')[0];
  if (classTrue) {
    classTrue.classList.remove('liSelectedColor');
  }
}

list.addEventListener('click', (event) => {
  classRemove();
  event.target.classList.add('liSelectedColor');
});

list.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

clearButton.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].remove();
  }
});

clearCheked.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
});
