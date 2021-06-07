const botao = document.getElementById('criar-tarefa');
const inputValue = document.getElementById('texto-tarefa');
const pegaOl = document.getElementById('lista-tarefas');
// desafio 5
function criaItem() {
  const criaLi = document.createElement('li');
  criaLi.innerText = inputValue.value;
  criaLi.addEventListener('click', liCinza); //  evento do desafio 7
  criaLi.addEventListener('dblclick', concluido); //    evento do desafio 9
  pegaOl.appendChild(criaLi);
  inputValue.value = '';
}
botao.addEventListener('click', criaItem);

// desafio 7
function liCinza(event) {
  //   console.log('ta funcionando');
  for (let index = 0; index < pegaOl.children.length; index += 1) {
    // esse for é referente ao desafio 8
    pegaOl.children[index].classList.remove('cinzou');
  }
  const liEvent = event.target;
  liEvent.classList.add('cinzou');
}

// desafio 9
function concluido(event) {
  console.log('funciona');
  console.log(event.target);
  event.target.classList.toggle('completed');
}

//  desafio 10
const botaoApagar = document.createElement('button');
botaoApagar.id = 'apaga-tudo';
botaoApagar.innerText = 'Apaga Tudo!';
const botoesDeApagar = document.getElementById('botoes-de-apagar');
botoesDeApagar.appendChild(botaoApagar);
const todasLi = document.getElementsByTagName('li');
function apagaTudo() {
  for (let index = 0; index < todasLi.length; index += 1) {
    todasLi[index].remove();
    index -= 1;
  }
}
botaoApagar.addEventListener('click', apagaTudo);

// desafio 11
const botaoApagarComplete = document.createElement('button');
botaoApagarComplete.id = 'remover-finalizados';
botaoApagarComplete.innerText = 'Remove os finalizados';
botoesDeApagar.appendChild(botaoApagarComplete);
function removeFinalizados() {
  for (let index = 0; index < todasLi.length; index += 1) {
      if(todasLi[index].classList.contains('completed')){
          todasLi[index].remove();
          index -= 1;
      }
      
  }
}
botaoApagarComplete.addEventListener('click', removeFinalizados);
