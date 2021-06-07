/* PROJETO 4 */
const inputTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');

// * PAI da lista 'ol'
let olTarefas = document.querySelector('#lista-tarefas');

// * FILHOS  da lista 'li'
let filhosTarefas = olTarefas.children;

function manipularTarefas() {
  /* texto do imput */
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  //const olTarefas = document.querySelector('#lista-tarefas');
  const liTarefa = document.createElement('li');

  liTarefa.innerText = textoTarefa;
  olTarefas.appendChild(liTarefa);
  inputTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', manipularTarefas);

function selecionarItem(event){
  let itemClicado = event.target;
  itemClicado.classList.add('selecionado');

  /* * remover a classe 'selecionado' do irmão */
  for (let i = 0; i < filhosTarefas.length; i += 1){
    if (filhosTarefas[i] !== itemClicado) {
      filhosTarefas[i].classList.remove('selecionado');
    }
  }
}
olTarefas.addEventListener('click', selecionarItem);

function completarTarefa(event) {
  let itemClicado = event.target;
  itemClicado.classList.toggle('completed');
}
olTarefas.addEventListener('dblclick', completarTarefa);

let btnApagarTudo = document.querySelector('#apaga-tudo');
function apagarTudo() {
  let filhos = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < filhos.length; i += 1) {
    filhos[i].remove();
  }
}
btnApagarTudo.addEventListener('click', apagarTudo);

let btnExcluirFinalizadas = document.querySelector('#remover-finalizados');
function excluirFinalizadas() {
  let itens = document.querySelectorAll('.completed');
  
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].remove();
  }
  
}
btnExcluirFinalizadas.addEventListener('click', excluirFinalizadas);

let btnRemoverSelecionada = document.querySelector('#remover-selecionado');
function removerSelecionada() {
  let selecionada = document.querySelector('.selecionado');
  
  if (filhosTarefas.length === 0) {
    alert('Sua lista está vazia. Aproveite seu tempo livre!');
  } else if (selecionada === null) {
    alert('Por favor, selecione uma tarefa!');
  } else {
    selecionada.remove();
  }
}
btnRemoverSelecionada.addEventListener('click', removerSelecionada);

let btnSalvar = document.querySelector('#salvar-tarefas');
function salvarTarefas() {
  let itemLista = document.querySelectorAll('li');

  if (localStorage.length !== 0) {
    localStorage.clear();
  }

  for (let i = 0; i < itemLista.length; i += 1) {
    localStorage.setItem('item'+[i],itemLista[i].innerText);
  }
}
btnSalvar.addEventListener('click', salvarTarefas);

/** recuperar do local */
window.onload = function() {
  for (let i = 0; i < localStorage.length; i += 1) {    
    let liItem = document.createElement('li');
    // esse 'i' concatenado com 'item' é para gerar chaves diferentes, item0, item1 ... item[i]
    liItem.innerText = localStorage.getItem('item'+[i]);
    // olTarefas é o PAI dos li  
    olTarefas.appendChild(liItem);
  }
}