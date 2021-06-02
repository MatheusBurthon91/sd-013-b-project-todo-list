const botao = document.querySelector('#criar-tarefa');
const entradaDeTexto = document.querySelector('#texto-tarefa');

function criaTarefa() {
  const texto = document.querySelector('#texto-tarefa').value;
  return texto;
}

function adicionaLista(eventoClick) {
  const addlist = document.querySelector('#lista-tarefas');
  let limpa = document.querySelector('#texto-tarefa');
  
  if (criaTarefa() != ''){
    let lista = document.createElement('li');
    lista.innerText = criaTarefa();
    addlist.appendChild(lista);
    limpa.value ='';
  }
  limpa.value ='';
}



entradaDeTexto.addEventListener('change', criaTarefa);
botao.addEventListener('click', adicionaLista);

