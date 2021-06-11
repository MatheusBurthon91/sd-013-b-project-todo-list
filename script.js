const tarefaInput = document.querySelector('#texto-tarefa');
const tarefaBtn = document.querySelector('#criar-tarefa');
const apagaTudoBtn = document.querySelector('#apaga-tudo');
const salvaTarefas = document.querySelector('#salvar-tarefas');
const removeSelecionado = document.querySelector('#remover-selecionado');
const removeFinalizados = document.querySelector('#remover-finalizados');
let listaTarefas;
let tarefas;

function selecionarTarefa(event) {
  tarefas = document.querySelectorAll('.item');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function completarTarefa(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function carregarStorage() {
  const itensSalvos = JSON.parse(localStorage.getItem('Itens ToDo'));
  const classesSalvas = JSON.parse(localStorage.getItem('ToDo Classes'));
  if (itensSalvos) {
    listaTarefas = document.querySelector('#lista-tarefas');
    for (let index = 0; index < itensSalvos.length; index += 1) {
      const item = document.createElement('li');
      item.classList.add(classesSalvas[index]);
      item.innerText = itensSalvos[index];
      item.addEventListener('click', selecionarTarefa);
      item.addEventListener('dblclick', completarTarefa);
      listaTarefas.appendChild(item);
    }
  }
}

tarefaBtn.onclick = () => {
  const valorDigitado = tarefaInput.value;
  if (valorDigitado !== '') {
    listaTarefas = document.querySelector('#lista-tarefas');
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = valorDigitado;
    item.addEventListener('click', selecionarTarefa);
    item.addEventListener('dblclick', completarTarefa);
    listaTarefas.appendChild(item);
    tarefaInput.value = '';
  }
};

salvaTarefas.onclick = () => {
  const itens = document.querySelectorAll('.item');
  const listaItens = [];
  const listaClasses = [];
  for (let index = 0; index < itens.length; index += 1) {
    listaItens.push(itens[index].innerHTML);
    listaClasses.push(itens[index].classList);
    localStorage.setItem('Itens ToDo', JSON.stringify(listaItens));
    localStorage.setItem('ToDo Classes', JSON.stringify(listaClasses));
  }
};

removeSelecionado.onclick = () => {
  const tarefaSelecionada = document.querySelector('.selected');
  tarefaSelecionada.remove();
};

removeFinalizados.onclick = () => {
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  tarefasFinalizadas.forEach((element) => {
    element.remove();
  });
};

apagaTudoBtn.onclick = () => {
  tarefas = document.querySelectorAll('.item');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].remove();
  }
  localStorage.clear();
};

window.onload = () => {
  carregarStorage();
};
