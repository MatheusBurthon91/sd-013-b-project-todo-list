function adicionarTarefaEvento() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const ol = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerText = document.getElementById('texto-tarefa').value;
    li.className = 'tarefas';
    ol.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}

adicionarTarefaEvento();

function mudarCorDoItem() {
  document.getElementById('lista-tarefas').addEventListener('click', (event) => {
    const evento = event.target;
    if (evento.style.backgroundColor === '') {
      evento.style.backgroundColor = 'rgb(128,128,128)';
    } else {
      evento.style.backgroundColor = '';
    }
  });
}

mudarCorDoItem();
