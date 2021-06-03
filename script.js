const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const caixaDeInput = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoApagaFinalizados = document.querySelector('#remover-finalizados');

// Requesito 5 && 6 - evento click no botao e entrega valor de input na lista
// texto no button
function criaItemLista() {
  const itemLista = document.createElement('li');
  itemLista.className = 'item-tarefa';
  itemLista.innerText = caixaDeInput.value;
  listaTarefas.appendChild(itemLista);
  caixaDeInput.value = '';
}
botaoCriarTarefa.addEventListener('click', criaItemLista);
botaoCriarTarefa.innerText = 'Criar Tarefa';

// requesito 7- alterar cor de fundo do item da lista tarefas
// Requesito 8 - alterar apenas uma cor por vez
const itemTarefasOl = document.querySelector('ol');

function alteraCorItemLista(event) {
  const itemLi = document.querySelectorAll('li');
  const evento = event;
  for (let index = 0; index < itemLi.length; index += 1) {
    itemLi[index].style.backgroundColor = 'white';
  }
  evento.target.style.backgroundColor = 'rgb(128,128,128)';
}
itemTarefasOl.addEventListener('click', alteraCorItemLista);

// requesito 9- Ao clicar 2x no item marca com risco de completado
// e retira o risco completado
function tarefaCompletada(event) {
  const evento = event;
  const itemLi = document.querySelectorAll('li');
  for (let index = 0; index < itemLi.length; index += 1) {
    itemLi[index].className = 'item-tarefa';
  }
  evento.target.className = 'item-tarefa completed';
}
itemTarefasOl.addEventListener('dblclick', tarefaCompletada);

// requesito 10- botao apaga tudo quando clicar apaga todos itens da lista
// botao criado direto no html
botaoApagaTudo.innerText = 'Apagar tudo';

function LimparLista() {
  itemTarefasOl.innerText = '';
}
botaoApagaTudo.addEventListener('click', LimparLista);

// requesito 11- Botao que remove elementos finalizados da lista
// botao criado direto  no html
botaoApagaFinalizados.innerText = 'Apaga Finalizados';

function LimpaFinalizados() {
  const finalizado = document.querySelector('.completed');
  finalizado.innerText = '';
  finalizado.remove();
}

botaoApagaFinalizados.addEventListener('click', LimpaFinalizados);
