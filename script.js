const tarefaInput = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const tarefas = document.querySelectorAll('.item');
const tarefaBtn = document.querySelector('#criar-tarefa');
const apagarTudoBtn = document.querySelector('#apagar-tudo');

function adicionarTarefa() {
  tarefaBtn.addEventListener('click', () => {
    const valorDigitado = tarefaInput.value;
    if (valorDigitado !== '') {
      const item = document.createElement('li');
      item.classList.add('item');
      item.innerText = valorDigitado;
      listaTarefas.appendChild(item);
      tarefaInput.value = '';
    }
  });
}

function selecionarTarefa() {
  tarefas.forEach((element) => {
    element.addEventListener('click', (e) => {
      for (let index = 0; index < tarefas.length; index += 1) {
        tarefas[index].classList.remove('selected');
      }
      e.target.classList.add('selected');
    });
  });
}

function completarTarefa() {
  tarefas.forEach((element) => {
    element.addEventListener('dblclick', (e) => {
      e.target.classList.add('completed');
    });
  });
}

function descompletarTarefa() {
  tarefas.forEach((element) => {
    element.addEventListener('dblclick', (e) => {
      if (e.target.classList.contains('completed')) {
        e.target.classList.remove('completed');
      }
    });
  });
}

function apagarTudo() {
  apagarTudoBtn.addEventListener('click', () => {
    for (let index = 0; index < tarefas.length; index += 1) {
      tarefas[index].remove();
    }
  });
}
adicionarTarefa();
selecionarTarefa();
completarTarefa();
descompletarTarefa();
apagarTudo();
