function adicionaInput() {
  const pai = document.getElementById('inputArea');
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.className = 'campo';
  pai.appendChild(input);
}

adicionaInput();

const listaTarefas = 'lista-tarefas';

function criaLista() {
  const pai = document.getElementById('listArea');
  const lista = document.createElement('ol');
  lista.id = listaTarefas;
  pai.appendChild(lista);
}
criaLista();
function confereCampo() {
  const campo = document.getElementById('texto-tarefa');
  const temp = campo.value;
  if (campo.value) {
    campo.value = '';
    return temp;
  }
}

function removeFundo() {
  const atual = document.getElementsByClassName('bg')[0];
  if (atual) {
    atual.classList.remove('bg');
  }
}

function alteraFundo(value) {
  removeFundo();
  value.target.classList.add('bg');
}

function verificaCompleted(alvo) {
  const lista = alvo;
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] === 'completed') {
      return true;
    }
  }
  return false;
}

function riscaConteudo(value) {
  const alvo = value.target;
  if (verificaCompleted(alvo.classList)) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}

function adicionaTarefa() {
  const lista = document.getElementById(listaTarefas);
  const item = document.createElement('li');
  item.textContent = confereCampo();
  item.className = 'item';
  item.addEventListener('click', alteraFundo);
  item.addEventListener('dblclick', riscaConteudo);
  lista.appendChild(item);
}

function adicionaBotao() {
  const pai = document.getElementById('inputArea');
  const btn = document.createElement('button');
  btn.id = 'criar-tarefa';
  btn.addEventListener('click', adicionaTarefa);
  btn.textContent = 'Adicionar';
  btn.className = 'btnAdicionar';
  pai.appendChild(btn);
}

adicionaBotao();

function limpaTudo() {
  const pai = document.getElementById(listaTarefas);
  const filhos = document.getElementsByClassName('item');
  const quant = filhos.length;
  for (let i = quant - 1; i >= 0; i -= 1) {
    pai.removeChild(filhos[i]);
  }
}

function adicionaLimpar() {
  const pai = document.getElementById('btnsArea');
  const btn = document.createElement('button');
  btn.id = 'apaga-tudo';
  btn.className = 'btnAdicionar';
  btn.textContent = 'Limpar';
  btn.addEventListener('click', limpaTudo);
  pai.appendChild(btn);
}

adicionaLimpar();

function removeFinalizados() {
  const pai = document.getElementById(listaTarefas);
  const filhos = document.getElementsByClassName('completed');
  const quant = filhos.length;
  for (let i = quant - 1; i >= 0; i -= 1) {
    pai.removeChild(filhos[i]);
  }
}

function adicionaRemover() {
  const pai = document.getElementById('btnsArea');
  const btn = document.createElement('button');
  btn.className = 'btnAdicionar';
  btn.textContent = 'Limpar Completos';
  btn.id = 'remover-finalizados';
  btn.addEventListener('click', removeFinalizados);
  pai.appendChild(btn);
}

adicionaRemover();

function transformaArray(save) {
  const itens = save;
  const arr = [];
  for (let i = 0; i < itens.length; i += 1) {
    arr.push(itens[i].textContent);
  }
  return JSON.stringify(arr);
}

function transformaClasses(arr) {
  return JSON.stringify(arr);
}
console.log()
function getClasses(itens) {
  const arr = [];


  for (let i = 0; i < itens.length; i += 1) {
    arr.push(itens[i].className);
  }

  return transformaClasses(arr);
}

function salvaLocal(tarefas, classes) {
  localStorage.clear();
  localStorage.setItem('tarefas', tarefas);
  localStorage.setItem('classes', classes);
}

function salvaTarefas() {
  const itens = document.getElementsByClassName('item');
  const lista = transformaArray(itens);
  const classes = getClasses(itens);
  salvaLocal(lista, classes);
}

function adicionaSalvar() {
  const pai = document.getElementById('btnsArea');
  const btn = document.createElement('button');
  btn.className = 'btnAdicionar';
  btn.textContent = 'Salvar';
  btn.id = 'salvar-tarefas';
  btn.addEventListener('click', salvaTarefas);
  pai.appendChild(btn);
}

adicionaSalvar();

function adicionaSalvos(tarefa, classe) {
  const tarefas = JSON.parse(tarefa);
  const classes = JSON.parse(classe);
  const pai = document.getElementById(listaTarefas);
  for (let i = 0; i < tarefas.length; i += 1) {
    const filho = document.createElement('li');
    filho.addEventListener('click', alteraFundo);
    filho.addEventListener('dblclick', riscaConteudo);
    filho.className = classes[i];
    filho.textContent = tarefas[i];
    pai.appendChild(filho);
  }
}

function verificaSalvos() {
  const tarefas = localStorage.getItem('tarefas');
  const classes = localStorage.getItem('classes');

  if (tarefas && classes) {
    adicionaSalvos(tarefas, classes);
  }
}

verificaSalvos();
function transforma(objeto) {
  const arr = [];
  for (let i = 0; i < objeto.length; i += 1) {
    arr.push(objeto[i]);
  }
  return arr;
}

function refaz(novo) {
  limpaTudo();
  const pai = document.getElementById(listaTarefas);
  for (let i = 0; i < novo.length; i += 1) {
    pai.appendChild(novo[i]);
  }
}

function sobe(pos) {
  if (pos === 0) {
    return;
  }
  const filhos = document.getElementsByClassName('item');
  const novo = transforma(filhos);
  const temp = novo[pos - 1];
  novo[pos - 1] = novo[pos];
  novo[pos] = temp;
  refaz(novo);
}

function posicao(selecionado) {
  const selected = selecionado;
  const filhos = document.getElementsByClassName('item');
  for (let i = 0; i < filhos.length; i += 1) {
    if (selected === filhos[i]) {
      return i;
    }
  }
}

function sobeItem() {
  const selecionado = document.getElementsByClassName('bg')[0];
  const lugar = posicao(selecionado);
  sobe(lugar);
}

function desce(pos) {
  const filhos = document.getElementsByClassName('item');
  if (pos === filhos.length - 1) {
    return;
  }
  const novo = transforma(filhos);
  const temp = novo[pos + 1];
  novo[pos + 1] = novo[pos];
  novo[pos] = temp;
  refaz(novo);
}

function desceItem() {
  const selecionado = document.getElementsByClassName('bg')[0];
  const lugar = posicao(selecionado);
  desce(lugar);
}

function criaSubir() {
  const subir = document.createElement('button');
  subir.id = 'mover-cima';
  subir.className = 'btnAdicionar';
  subir.textContent = 'Subir';
  subir.addEventListener('click', sobeItem);
  return subir;
}

function criaDescer() {
  const descer = document.createElement('button');
  descer.id = 'mover-baixo';
  descer.className = 'btnAdicionar';
  descer.textContent = 'Descer';
  descer.addEventListener('click', desceItem);
  return descer;
}

function adicionaMover() {
  const pai = document.getElementById('btnsArea');
  pai.appendChild(criaSubir);
  pai.appendChild(criaDescer);
}
adicionaMover();

function removeSelecionado() {
  const selecionado = document.getElementsByClassName('bg')[0];
  const pai = document.getElementById(listaTarefas);
  if (selecionado) {
    pai.removeChild(selecionado);
  }
}

function adicionaRemoverSelecionado() {
  const pai = document.getElementById('btnsArea');
  const filho = document.createElement('button');
  filho.id = 'remover-selecionado';
  filho.className = 'btnAdicionar';
  filho.textContent = 'Remover Selecionado';
  filho.addEventListener('click', removeSelecionado);
  pai.appendChild(filho);
}

adicionaRemoverSelecionado();
