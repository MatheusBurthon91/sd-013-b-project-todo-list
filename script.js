/* PROJETO 4 */
const inputTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');

// * PAI da lista 'ol'
let olTarefas = document.querySelector('#lista-tarefas');

// * FILHOS  da lista 'li'
let filhosTarefas = olTarefas.children;

function manipularTarefas() {
  /* texto do imput */
  const textoTarefa = document.querySelector('#texto-tarefa').value;
  //const olTarefas = document.querySelector('#lista-tarefas');
  const liTarefa = document.createElement('li');

  liTarefa.innerText = textoTarefa;
  olTarefas.appendChild(liTarefa);
  inputTarefa.value = '';
}
btnCriarTarefa.addEventListener('click', manipularTarefas);

function selecionarItem(event){
  let itemClicado = event.target;
  itemClicado.classList.add('selecionado');

  /* * remover a classe 'selecionado' do irmão */
  for (let i = 0; i < filhosTarefas.length; i += 1){
    if (filhosTarefas[i] !== itemClicado) {
      filhosTarefas[i].classList.remove('selecionado');
    }
  }
}
olTarefas.addEventListener('click', selecionarItem);