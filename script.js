/* PROJETO 4 */
const inputTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');

function manipularTarefas() {
  /* texto do imput */
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  const olTarefas = document.querySelector('#lista-tarefas');
  const liTarefa = document.createElement('li');

  liTarefa.innerText = textoTarefa;
  olTarefas.appendChild(liTarefa);
  inputTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', manipularTarefas);

function selecionarItem(event){
  let itemClicado = event.target;
  itemClicado.classList.toggle('selecionado');
}
let lista = document.querySelector('#lista-tarefas');
lista.addEventListener('click', selecionarItem);