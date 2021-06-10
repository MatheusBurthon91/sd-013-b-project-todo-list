/* PROJETO 4 */
const inputTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
let olTarefas = document.querySelector('#lista-tarefas'); // PAI da lista 'ol'
let filhosTarefas = olTarefas.children; // FILHOS  da lista 'li'
let btnApagarTudo = document.querySelector('#apaga-tudo');
let btnExcluirFinalizadas = document.querySelector('#remover-finalizados');
let btnRemoverSelecionada = document.querySelector('#remover-selecionado');
let btnSalvar = document.querySelector('#salvar-tarefas');


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

function selecionarItem(event) {
  let itemClicado = event.target;
  itemClicado.classList.add('selecionado');

  /* * remover a classe 'selecionado' do irmão */
  for (let i = 0; i < filhosTarefas.length; i += 1) {
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

function apagarTudo() {
  let filhos = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < filhos.length; i += 1) {
    filhos[i].remove();
  }
}
btnApagarTudo.addEventListener('click', apagarTudo);

function excluirFinalizadas() {
  let itens = document.querySelectorAll('.completed');

  for (let i = 0; i < itens.length; i += 1) {
    itens[i].remove();
  }

}
btnExcluirFinalizadas.addEventListener('click', excluirFinalizadas);

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

function gerarObjeto(lista) {
  return {
    texto: lista.innerText,
    classe: lista.className
  }
}

function salvarTarefas() {
  let itemLista = document.querySelectorAll('li');

  if (localStorage.length !== 0) {
    localStorage.clear();
  }

  for (let i = 0; i < itemLista.length; i += 1) {
    localStorage.setItem('item' + [i], JSON.stringify(gerarObjeto(itemLista[i])));
  }

}
btnSalvar.addEventListener('click', salvarTarefas);

/* a função recebe um OBJETO como parâmetro */
function criarLi(objeto) {
  let novaLiCriada = document.createElement('li');

  novaLiCriada.innerText = objeto.texto;
  novaLiCriada.className = objeto.classe;

  return novaLiCriada;
}


function moverParaPima() {
  let itemLista = document.querySelector('.selecionado');
  // retorna 'true' se o elemento tem um irmão 'antes'
  if (itemLista.classList.contains('selecionado')) {
    if (itemLista.previousElementSibling) {
      itemLista.parentNode.insertBefore(itemLista, itemLista.previousElementSibling);
    }
  } 
}

function moverParaBaixo() {
  let itemLista = document.querySelector('.selecionado');
  // if (itemLista.classList.contains('selecionado')) {
    if (itemLista){
    if (itemLista.nextElementSibling) {
      itemLista.parentNode.insertBefore(itemLista.nextElementSibling, itemLista);
    }
  }
}
document.querySelector('#mover-cima').addEventListener('click', moverParaPima);
document.querySelector('#mover-baixo').addEventListener('click', moverParaBaixo);



/** recuperar do localStorage, após o carregamento da página */
window.onload = function recuperarLista() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const novoObjeto = JSON.parse(localStorage.getItem('item' + [i]));
    /** a novaLi recebe o retorno da função, ou seja, a novaLiCriada */
    let novaLi = criarLi(novoObjeto);
    /** e ela é adicionada como filha da OL, na última posição */
    olTarefas.appendChild(novaLi);
  }
}
