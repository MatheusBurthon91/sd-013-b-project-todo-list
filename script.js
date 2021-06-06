/* PROJETO 4 */

/* No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. 

Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados. */

let inputTarefa = document.querySelector('#texto-tarefa');
let btnCriarTarefa = document.querySelector('#criar-tarefa');

function manipularTarefas() {
  // texto do imput
  let textoTarefa = document.querySelector('#texto-tarefa').value;
  let olTarefas = document.querySelector('#lista-tarefas');
  let liTarefa = document.createElement('li');
  liTarefa.innerText = textoTarefa;

  olTarefas.appendChild(liTarefa);

  inputTarefa.value = '';
}

  btnCriarTarefa.addEventListener('click', manipularTarefas);
