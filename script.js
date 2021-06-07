const botao = document.getElementById('criar-tarefa');
const inputValue = document.getElementById('texto-tarefa');
const pegaOl = document.getElementById('lista-tarefas');
// desafio 5
function criaItem() {
  const criaLi = document.createElement('li');
  criaLi.innerText = inputValue.value;
  criaLi.addEventListener('click', liCinza); //evento do ex7
  pegaOl.appendChild(criaLi);
  inputValue.value = '';
}
botao.addEventListener('click', criaItem);

// ex7
const pegaLi = document.getElementById('lista-tarefas').children;

function liCinza(event) {
  console.log('ta funcionando');
  const liEvent = event.target;
  liEvent.classList.add('cinzou');
}
