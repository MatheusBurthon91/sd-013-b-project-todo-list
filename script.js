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
listaTarefa.addEventListener('click', marcarAtividade);
