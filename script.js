
  function adicionarTarefa() {
    const lista = document.getElementById('lista-tarefas');
    const item = document.createElement('li');
    const entrada = document.getElementById('texto-tarefa');
    item.innerText = entrada.value;
    lista.appendChild(item);
    entrada.value = '';
  }

  const botaoCriar = document.getElementById('criar-tarefa');
  botaoCriar.addEventListener('click', adicionarTarefa);

