const buttonAdicionar = document.querySelector('#criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const lista = document.querySelector('li');
function tarefa() {
  const textInp = document.querySelector('#texto-tarefa');
  const creatLi = document.createElement('li');
  listaOrdenada.appendChild(creatLi);
  creatLi.innerText = textInp.value;
  textInp.value = '';
}

buttonAdicionar.addEventListener('click', tarefa);

function colorElement(event) {
  console.log(event.target.classList[0]);
  let classLista = document.querySelector('.lista');
  console.log(classLista);
  if (classLista !== null) {
    classLista.classList.remove('lista');
  }
  event.target.className = 'lista';
}

listaOrdenada.addEventListener('click', colorElement);
