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
