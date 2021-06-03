const ol = document.getElementById('lista-tarefas');

function adicionarTarefaEvento() {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = document.getElementById('texto-tarefa').value;
    li.className = 'tarefas';
    ol.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}

adicionarTarefaEvento();

function mudarCorDoItem() {
  ol.addEventListener('click', (event) => {
    const evento = event.target;
    if (evento.classList.contains('tarefaMarcada') === true) {
      evento.classList.remove('tarefaMarcada');
    } else {
      if (document.querySelector('.tarefaMarcada') != null) {
        document.querySelector('.tarefaMarcada').classList.remove('tarefaMarcada');
      }
      evento.classList.add('tarefaMarcada');
    }
  });
}

mudarCorDoItem();

function riscarItem() {
  ol.addEventListener('dblclick', (event) => {
    const evento = event.target;
    if (evento.classList.contains('completed') === true) {
      evento.classList.remove('completed');
    } else {
      evento.classList.add('completed');
    }
  });
}

riscarItem();
