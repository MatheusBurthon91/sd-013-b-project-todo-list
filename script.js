// Usei o exercicio da piramide do bloco 5 como referencia para o window.onload
window.onload = function() {
  let botao = document.getElementById('criar-tarefa');
  let input = document.getElementById('texto-tarefa')
  let listaTarefas = document.getElementById('lista-tarefas');

  function criaTarefa(event) {
    let tarefa = document.createElement('li');
    // Referencia da propriedade value https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
    tarefa.innerText = input.value;
    listaTarefas.appendChild(tarefa);
    input.value = "";
  }
  botao.addEventListener('click', criaTarefa);
}