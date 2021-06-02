const botaoCriarTarefa = document.querySelector('#criar-tarefa');
const caixaDeInput = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

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
  const evento = event;
  console.log('Click OK');
  const styleLi = document.querySelectorAll('li');
  for (let index = 0; index < styleLi.length; index += 1) {
    styleLi[index].style.backgroundColor = 'white';
  }
  evento.target.style.backgroundColor = 'rgb(128,128,128)';
}
itemTarefasOl.addEventListener('click', alteraCorItemLista);
