let buttonAdicionar = document.querySelector('#criar-tarefa');
let listaOrdenada = document.querySelector('#lista-tarefas');
let li = document.querySelector('.lista');
function tarefa() {
  let textInp = document.querySelector('#texto-tarefa');
  let creatLi = document.createElement('li');
  creatLi.className = 'lista';
  listaOrdenada.appendChild(creatLi);
  creatLi.innerText = textInp.value;
  textInp.value = '';
}
buttonAdicionar.addEventListener('click', tarefa);

// criar uma funcao que ao clicar no botao o elemento da lista fique com a cor cinza

function colorElement() {
  let list = document.querySelector('.lista');
  list.style.background = 'rgb(128, 128, 128)';
}

listaOrdenada.addEventListener('click', colorElement);
