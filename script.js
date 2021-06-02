// Função do botão input-task.
const orderedList = document.getElementsByTagName('ol')[0];
function inputTask() {
  const listItem = document.createElement('li');
  const texto = document.getElementById('texto-tarefa').value;
  listItem.innerText = texto;
  orderedList.appendChild(listItem);
  listItem.style.backgroundColor = 'white';
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', inputTask);

//  Altera a cor dos item da lista ao clicar
function changeColor(event) {
  const selectedOne = document.querySelector('.selected');
  if (selectedOne != null) {
    selectedOne.style.backgroundColor = 'white';
    selectedOne.classList.remove('selected');
  }
  const listItem = event.target;
  listItem.style.backgroundColor = 'rgb(128,128,128)';
  listItem.classList.add('selected');
}

orderedList.addEventListener('click', changeColor);

// Adiciona DoubleClick.
function riskItem(event) {
  const listItem = event.target;
  if (listItem.classList.contains('completed')) {
    listItem.classList.remove('completed');
  } else {
    listItem.classList.add('completed');
  }
}

orderedList.addEventListener('dblclick', riskItem);

// Adiciona Botao Apaga-tudo
function clearAll() {
  orderedList.innerHTML = '';
}

document.getElementById('apaga-tudo').addEventListener('click', clearAll);
