const buttonAdd = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

buttonAdd.addEventListener('click', () => {
  const lista = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  lista.appendChild(li);
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
  event.target.classList.toggle('completed')
})