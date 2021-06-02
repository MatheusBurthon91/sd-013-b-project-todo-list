const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const caixaDeInput = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

// Requesito 5 && 6 - evento click no botao e entrega valor de input na lista
function criaItemLista() {
  const itemLista = document.createElement('li');
  itemLista.innerText = caixaDeInput.value;
  listaTarefas.appendChild(itemLista);
  caixaDeInput.value = '';
}
botaoCriarTarefa.addEventListener('click', criaItemLista);
botaoCriarTarefa.innerText = 'Criar Tarefa';
