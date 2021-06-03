// Usei o exercicio da piramide do bloco 5 como referencia para o window.onload
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagar = document.getElementById('apaga-tudo');

function criaTarefa() {
  const tarefa = document.createElement('li');
  // Referencia da propriedade value https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
  tarefa.innerText = input.value;
  tarefa.className = 'tarefa';
  listaTarefas.appendChild(tarefa);
  input.value = '';
}
botao.addEventListener('click', criaTarefa);

function pintaSoUm(event) {
  const x = event.target;
  for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
    listaTarefas.children[i].style.backgroundColor = 'white';
  }
  x.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click', pintaSoUm);

function riscaTarefaCompletada(event) {
  const x = event.target;
  if (x.className === 'tarefa completed') {
    x.style.textDecoration = 'none';
    x.className = 'tarefa';
  } else {
    x.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    x.className = 'tarefa completed';
  }

}
listaTarefas.addEventListener('dblclick', riscaTarefaCompletada);
// A função abaixo foi baseado nessa referencia https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

function removeElementsByClass(){
    const elements = document.getElementsByClassName('tarefa');
    while(elements.length > 0){
        listaTarefas.removeChild(elements[0]);
    }
}

apagar.addEventListener('click', removeElementsByClass);