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
  }

  button.addEventListener('click', addTarefa);

  const itensLi = document.getElementsByClassName('itemLista');

  function trocaCorFundo(event) {
    for (let index = 0; index < itensLi.length; index += 1) {
      if (itensLi[index].classList.contains('check')) {
        itensLi[index].classList.remove('check');
        itensLi[index].style.backgroundColor = 'white';
      } else {
        event.target.classList.add('check');
        event.target.style.backgroundColor = 'rgb(128,128,128)';
      }
    }
  }
  lista.addEventListener('click', trocaCorFundo);

  function riscado(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
  lista.addEventListener('dblclick', riscado);

  const buttonApaga = document.getElementById('apaga-tudo');

  buttonApaga.addEventListener('click', function() {
    const apagarLista = lista;
    apagarLista.innerHTML = '';
  })
};
