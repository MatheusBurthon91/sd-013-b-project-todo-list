let listaTarefa = document.getElementById('lista-tarefas');
let linhaAtividade = document.getElementsByTagName('li');
let textoAtividade = document.getElementById('texto-tarefa');
let adicionar = document.getElementById('criar-tarefa');

//Exercicio 5
function criaAtividade() {
  let criaLinhaAtividade = document.createElement('li');
  let atividade = textoAtividade.value;
  criaLinhaAtividade.innerText = atividade;
  textoAtividade.value = '';
  criaLinhaAtividade.addEventListener('click', marcarAtividade);
  criaLinhaAtividade.addEventListener('dblclick', riscarAtividade);
  listaTarefa.appendChild(criaLinhaAtividade);
}
adicionar.addEventListener('click', criaAtividade);

/*//Exercicio 7
function marcarAtividade(event) {
  let itemSelecionado = event.target;
  itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefa.addEventListener('click', marcarAtividade);
*/

//Exercicio 8
function marcarAtividade(event) {
  let linhaAtividade = document.querySelectorAll('li');
  let itemSelecionado = event.target;
  for (let index = 0; index < linhaAtividade.length; index += 1) {
    if (linhaAtividade[index] === itemSelecionado) {
      itemSelecionado.classList.add('selected');
    } else {
      linhaAtividade[index].classList.remove('selected');
    }
  }
}
//listaTarefa.addEventListener('click', marcarAtividade);

//Exercicio 9
function riscarAtividade(event) {
  let itemSelecionado = event.target;
  console.log(itemSelecionado);
  if (itemSelecionado.classList.contains('completed')) {
    itemSelecionado.classList.remove('completed');
  } else {
    itemSelecionado.classList.add('completed');
  }
}

//Exercicio 10
let botaoApagarTudo = document.getElementById('apaga-tudo');
function apagarTudo() {
  let todasTarefas = document.querySelectorAll('li');
  for (let index = 0; index < todasTarefas.length; index += 1) {
    todasTarefas[index].remove();
  }
}
botaoApagarTudo.addEventListener('click', apagarTudo);

//Exercicio 11
let botaoApagarRealizadas = document.getElementById('remover-finalizados');
function apagarAtividadeRealizada() {
  let todasTarefas = document.querySelectorAll('.completed');
  for (let index = 0; index < todasTarefas.length; index += 1) {
    todasTarefas[index].remove();
  }
}
botaoApagarRealizadas.addEventListener('click', apagarAtividadeRealizada);
