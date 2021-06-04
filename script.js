
let botaoCria = document.querySelector('#criar-tarefa');
botaoCria.addEventListener('click', input);

let lista = document.querySelector('#lista-tarefas');

function input (){
  
  let item = document.createElement('li');
  lista.appendChild(item);
  item.className = 'pintar';
  let input = document.querySelector('#texto-tarefa');
  let valor = input.value;
  item.innerHTML = valor;
  input.value = '';
}
// -----------------------------------------------------------

lista.addEventListener('click', click);

function click(event) {

  const lastItem = document.querySelector('.cinza');

  if (event.target.classList.contains('pintar')) {

    event.target.classList.add('cinza');

    if (lastItem) {
    lastItem.classList.remove('cinza');
    }
  }
}