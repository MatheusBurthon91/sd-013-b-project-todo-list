const itemList = document.querySelector('#lista-tarefas');

function addItem() {
  const parentElement = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerHTML = input;
  newItem.className = 'item';
  // thread do stackOverFlow me ajudou a parar a função addItem caso a condição fosse atendida: https://stackoverflow.com/questions/3536055/stopping-a-javascript-function-when-a-certain-condition-is-met;
  if (input === '') {
    alert('Impossível adicionar item vazio à lista');
    return;
  }
  parentElement.appendChild(newItem);
  document.querySelector('input').value = '';
}

const button = document.querySelector('button');
button.addEventListener('click', addItem);

// adiciona escutador de evento a lista
itemList.addEventListener('click', (e) => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.classList.remove('selected');
  } e.target.classList.add('selected');
});

itemList.addEventListener('dblclick', (e) => {
  const completedItem = document.querySelectorAll('.completed');
  if (completedItem != null) {
    e.target.classList.toggle('completed');
  }
});

const deleteEveryt = document.querySelector('#apaga-tudo');
function deleteItems(e) {
  while (itemList.hasChildNodes()) {
    itemList.removeChild(itemList.firstChild);
  }
  console.log(e.target);
}

deleteEveryt.addEventListener('click', deleteItems);

function removeCompleted() {
  const finished = document.querySelectorAll('.completed');
  for (let index = 0; index < finished.length; index += 1) {
    finished[index].remove();
  }
}

const removeFinished = document.querySelector('#remover-finalizados');
removeFinished.addEventListener('click', removeCompleted);

const removeSelected = document.getElementById('remover-selecionado');
removeSelected.addEventListener('click', (event) => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem === null) {
    alert('Não há itens selecionados');
  }
  selectedItem.remove();
  console.log(event.target);
});
