const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const caixaDeInput = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function criaItemLista() {
  const itemLista = document.createElement('li');
  itemLista.innerText = caixaDeInput.value;
  listaTarefas.appendChild(itemLista);
  caixaDeInput.value = '';
}
botaoCriarTarefa.addEventListener('click', criaItemLista);
