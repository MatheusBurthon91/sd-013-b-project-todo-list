const textoTarefa = document.querySelector('#texto-tarefa');
const criarTarefas = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

criarTarefas.addEventListener('click', () => {
  const newLi = document.createElement('li');
  newLi.innerText = textoTarefa.value;
  listaTarefas.appendChild(newLi);
  textoTarefa.value = '';
});

function seletorItem() {
  listaTarefas.addEventListener('click', (event) => {
    const colorGrey = 'rgb(128, 128, 128)';
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].style.backgroundColor === colorGrey) {
        li[index].style.backgroundColor = '';
        li[index].classList.remove('seletorColor');
      }
    }
    const evt = event.target;
    evt.style.backgroundColor = colorGrey;
    evt.classList.add('seletorColor');
  });
}
seletorItem();

function clearTasks() {
  const clearAllTasks = document.querySelector('#apaga-tudo');
  clearAllTasks.addEventListener('click', () => {
    listaTarefas.innerText = '';
  });
}
clearTasks();

function doubleClick() {
  listaTarefas.addEventListener('dblclick', (event) => {
    const evt = event.target;
    if (evt.classList.contains('completed')) {
      evt.classList.remove('completed');
      evt.style.textDecoration = '';
    } else {
      evt.classList.add('completed');
      evt.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}
doubleClick();

function removerFinalizados() {
  const butonRemoverFinalizados = document.querySelector('#remover-finalizados');
  butonRemoverFinalizados.addEventListener('click', () => {
    const completo = document.querySelectorAll('.completed');
    for (let index = 0; index < completo.length; index += 1) {
      listaTarefas.removeChild(completo[index]);
    }
  });
}
removerFinalizados();
