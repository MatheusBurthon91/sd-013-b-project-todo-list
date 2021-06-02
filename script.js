// Usei o exercicio da piramide do bloco 5 como referencia para o window.onload
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criaTarefa() {
  const tarefa = document.createElement('li');
  // Referencia da propriedade value https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
  tarefa.innerText = input.value;
  listaTarefas.appendChild(tarefa);
  input.value = '';
}
botao.addEventListener('click', criaTarefa);

function pintaSoUm(event) {
  let x = event.target;
  for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
    listaTarefas.children[i].style.backgroundColor = 'white';
  }
  x.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click', pintaSoUm);

function riscaTarefaCompletada(event) {
  let x = event.target;
  if (x.className == 'completed') {
    x.style.textDecoration = 'none';
    x.className = '';
  }
  else {
    x.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    x.className = 'completed';
  }
  
}

listaTarefas.addEventListener('dblclick', riscaTarefaCompletada);
