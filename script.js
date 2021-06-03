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

function apagarTudo() {
  document.getElementById('apaga-tudo').addEventListener('click', () => {
    const pai = document.getElementById('lista-tarefas');
    pai.innerHTML = '';
  });
}

apagarTudo();

function removerFinalizados() {
  document.getElementById('remover-finalizados').addEventListener('click', () => {
    const finalizados = document.getElementsByClassName('completed');
    const comprimento = finalizados.length;
    for (let index = 0; index < comprimento; index += 1) {
      finalizados[0].remove();
    }
  });
}

removerFinalizados();
