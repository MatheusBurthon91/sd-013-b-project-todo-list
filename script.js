

let botaoCria = document.querySelector('#criar-tarefa');
botaoCria.addEventListener('click', input);

let lista = document.querySelector('#lista-tarefas');

function input (){
  
  let item = document.createElement('li');
  lista.appendChild(item);

  let input = document.querySelector('#texto-tarefa');
  
  let valor = input.value;

  item.innerHTML = valor;

  input.value = '';
}