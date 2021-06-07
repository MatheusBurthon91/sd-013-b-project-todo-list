const botao = document.getElementById('criar-tarefa');
const inputValue = document.getElementById('texto-tarefa');
const pegaOl = document.getElementById('lista-tarefas');
// desafio 5
function criaItem() {
  const criaLi = document.createElement('li');
  criaLi.innerText = inputValue.value;
  criaLi.addEventListener('click', liCinza); //  evento do desafio 7
  pegaOl.appendChild(criaLi);
  inputValue.value = '';
}
botao.addEventListener('click', criaItem);

// desafio 7
function liCinza(event) {
  //   console.log('ta funcionando');
  for (let index = 0; index < pegaOl.children.length; index += 1) {  // esse for é referente ao desafio 8
    pegaOl.children[index].classList.remove('cinzou');
  }
  const liEvent = event.target;
  liEvent.classList.add('cinzou');
}
