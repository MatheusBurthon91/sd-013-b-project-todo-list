function adicionarTarefas() {
  const pegarTextoTarefas = document.querySelector('#texto-tarefa');
  const pegarListaTarefa = document.querySelector('#lista-tarefas');

  const novaLista = document.createElement('li');
  novaLista.innerText = pegarTextoTarefas.value;
  pegarListaTarefa.appendChild(novaLista);
  pegarTextoTarefas.value = '';
}

const pegarCriarTarefas = document.querySelector('#criar-tarefa');
pegarCriarTarefas.addEventListener('click', adicionarTarefas);

function oneSelected(event) {
  const newList = document.querySelector('.selected');
  if (newList === null) {
    event.target.classList.toggle('selected');
  } else {
    newList.classList.remove('selected');
    newList.style.backgroundColor = '';
    event.target.classList.toggle('selected');
  }
}
const list = document.querySelector('#lista-tarefas');
list.addEventListener('click', oneSelected);

function lineThrough(event) {
  const dbClick = event;
  if (dbClick.target.classList.contains('completed')) {
    dbClick.target.classList.remove('completed');
  } else {
    dbClick.target.classList.add('completed');
  }
}
list.addEventListener('dblclick', lineThrough);

function deleteALL() {
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
}

function deleteFinish() {
  document.querySelectorAll('.completed').forEach((element) => element.remove());
}

document.getElementById('remover-finalizados').addEventListener('click', deleteFinish);
document.getElementById('apaga-tudo').addEventListener('click', deleteALL);
