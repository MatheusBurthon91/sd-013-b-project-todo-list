// Variables
const funcionamento = document.getElementById('funcionamento');
const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

// Functions
function createListItem() {
  if (input.value === '') {
    alert('Tarefa vazia');
  } else {
    const createLi = document.createElement('li');
    createLi.innerText = input.value;
    ol.appendChild(createLi);
  }
}

function clearInput() {
  input.value = '';
}

button.addEventListener('click', () => {
  createListItem();
  clearInput();
});
