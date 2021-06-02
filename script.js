window.onload = function () {
  const button = document.getElementById('criar-tarefa');
  const tarefa = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');

  function addTarefa() {
    const novaTarefa = tarefa.value;
    tarefa.value = '';
    const listaTarefa = document.createElement('li');
    listaTarefa.innerText = novaTarefa;
    listaTarefa.className = 'itemLista';
    lista.appendChild(listaTarefa);
  };

  button.addEventListener('click', addTarefa);
  
  function trocaCorFundo(event) {
    let itemClicado = event.target;
    itemClicado.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  lista.addEventListener('click', trocaCorFundo);
};