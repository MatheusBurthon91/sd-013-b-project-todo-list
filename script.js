// Usei o exercicio da piramide do bloco 5 como referencia para o window.onload
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criaTarefa() {
  const tarefa = document.createElement('li');
  tarefa.className = 'tarefa';
  // Referencia da propriedade value https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
  tarefa.innerText = input.value;
  listaTarefas.appendChild(tarefa);
  input.value = '';
}
botao.addEventListener('click', criaTarefa);

function pintaTarefa(event) {
  var x = event.target;
  x.style.backgroundColor = 'rgb(128, 128, 128)';
}
function pintar() {
    listaTarefas.addEventListener('click', pintaTarefa);
}
pintar();
