let buttonAdicionar = document.querySelector('#criar-tarefa');
let listaOrdenada = document.querySelector('#lista-tarefas');
function tarefa() {
  let textInp = document.querySelector('#texto-tarefa');
  let listaOrdenada = document.querySelector('#lista-tarefas');
  let creatLi = document.createElement('li');
  listaOrdenada.appendChild(creatLi);
  creatLi.innerText = textInp.value;
  console.log(creatLi);
  textInp.value = '';
}
buttonAdicionar.addEventListener('click', tarefa);
