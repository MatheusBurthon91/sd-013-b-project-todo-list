const listaTarefas = document.querySelector('#lista-tarefas');
const tarefaInput = document.querySelector('#texto-tarefa');

const buttonTarefa = document.querySelector('#criar-tarefa');


buttonTarefa.addEventListener('click', criaTarefa);

function criaTarefa() {
  const item = document.createElement('li');
  item.innerText = tarefaInput.value;
  listaTarefas.appendChild(item);
  tarefaInput.value = null;

  item.addEventListener('click', function() {
    selecionarTarefa(item);
  });
  item.addEventListener('dblclick', function () {
    completedItem(item);
  });
};


function selecionarTarefa(item) {
  if (document.getElementsByClassName('color-target')[0] != null){
    document.getElementsByClassName('color-target')[0].classList.remove('color-target')
  }
  item.classList.add('color-target')  
};

function completedItem(item) {
  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}
