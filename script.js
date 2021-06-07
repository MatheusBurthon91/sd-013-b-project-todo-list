// eslint-disable-next-line max-lines-per-function
window.onload = function () {
  const btnOk = document.getElementById('criar-tarefa');
  const olTasks = document.getElementById('lista-tarefas');
  const btnApagar = document.getElementById('apaga-tudo');
  const btnApagComplet = document.getElementById('remover-finalizados');
  const btnSalvar = document.getElementById('salvar-tarefas');
  const btnMoverCima = document.getElementById('mover-cima');
  const btnMoverBaixo = document.getElementById('mover-baixo');
  const btnApagarSelct = document.getElementById('remover-selecionado');

  btnOk.addEventListener('click', createTasks);
  olTasks.addEventListener('click', changeBackGround);
  olTasks.addEventListener('dblclick', completeTasks);
  btnApagar.addEventListener('click', clearConteiner);
  btnApagComplet.addEventListener('click', clearCompleted);
  btnSalvar.addEventListener('click', salvarTarefas);
  btnMoverCima.addEventListener('click', moverParaCima);
  btnMoverBaixo.addEventListener('click', moverParaBaixo);
  btnApagarSelct.addEventListener('click', removerSelecionado);

  criarTarefas();

}

function completeTasks(event) {
  const elementoAlvo = event.target;
  const classList = elementoAlvo.className;
  const completed = elementoAlvo.className;
  const seaparado = completed.split(' ');

  if (seaparado.length > 2) {
    for (let i = 0; i < seaparado.length; i += 1) {
      if (seaparado[i] === 'completed') {
        seaparado.splice(i, 1);
        elementoAlvo.className = seaparado.join(' ');
      }
    }
  } else {
    elementoAlvo.className = classList.replace(' completed', '');
    elementoAlvo.className += ' completed';
  }
}

function createTasks() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  const conteudo = document.getElementById('texto-tarefa');
  li.innerText = conteudo.value;
  conteudo.value = '';
  ol.appendChild(li);
}

function changeBackGround(event) {
  const elementoAlvo = event.target;
  const classList = elementoAlvo.className;
  const select = document.getElementsByClassName('select');
  if (select.length > 0) {
    const teste = select[0].className.replace('select', '');
    select[0].className = teste;
  }
  for (let i = 0; i < select.length; i += 1) {
    let clas = select[i].className;
    clas = clas.replace(' select', '');
    select[i].className = clas;
  }

  elementoAlvo.className = classList.replace(' select', '');

  elementoAlvo.className += ' select';
}

function clearConteiner() {
  const divLimpar = document.getElementById('lista-tarefas');
  divLimpar.innerHTML = '';
}

function clearCompleted() {
  const concluidos = document.getElementsByClassName('completed');
  while (concluidos.length !== 0) {
    concluidos[0].remove();
  }
}

function removerEspaço(value) {
  const palavraList = value.split('');

  if (value === '  completed') {
    for (let i = 0; i < palavraList.length; i += 1) {
      if (i < 2) {
        palavraList.shift();
      }
    }
  } else {
    palavraList.shift();
  }
  return palavraList.join('');
}

function salvarTarefas() {
  localStorage.clear();
  const tarefas = document.getElementsByTagName('li');
  let classes;
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].className !== '') {
      classes = tarefas[i].className;
      classes = removerEspaço(classes);
    } else {
      classes = '';
    }
    const valor = tarefas[i].innerText;
    localStorage.setItem(`${i} tarefa`, `${valor}/${classes}`);
  }
}

function criarTarefas() {
  const ol = document.getElementById('lista-tarefas');
  for (let i = 0; i < localStorage.length; i += 1) {
    const li = document.createElement('li');
    let tarefas = localStorage.getItem(`${i} tarefa`);
    tarefas = tarefas.split('/');
    const texto = tarefas[0];
    tarefas.shift();
    const classes = tarefas.join('');
    li.innerText = texto;
    li.className = classes;
    ol.appendChild(li);
    console.log(li);
  }
}

function moverParaCima() {
  const elementSelect = document.getElementsByClassName('select')[0];
  if (elementSelect === undefined) {
    alert('Selecione um elemento antes de continuar');
  } else {
    const elementAnterior = elementSelect.previousElementSibling;
    if (elementAnterior === null) {
      alert('Não Há texto antes');
    } else {
      const classSelect = elementSelect.className;
      const classAnterior = elementAnterior.className;
      const textSelect = elementSelect.innerText;
      const textAnterior = elementAnterior.innerText;
      elementAnterior.className = classSelect;
      elementAnterior.innerText = textSelect;
      elementSelect.className = classAnterior;
      elementSelect.innerText = textAnterior;
    }
  }
}

function moverParaBaixo() {
  const elementSelect = document.getElementsByClassName('select')[0];
  if (elementSelect === undefined) {
    alert('Selecione um elemento antes de continuar');
  } else {
    const proximoElement = elementSelect.nextSibling;
    if (proximoElement === null) {
      alert('Não Há texto depois');
    } else {
      const textSelect = elementSelect.innerText;
      const classSelect = elementSelect.className;
      const textProximo = proximoElement.innerText;
      const classProximo = proximoElement.className;
      elementSelect.className = classProximo;
      elementSelect.innerText = textProximo;
      proximoElement.innerText = textSelect;
      proximoElement.className = classSelect;
    }
  }
}

function removerSelecionado() {
  const elementSelect = document.getElementsByClassName('select')[0];
  if (elementSelect === undefined) {
    alert('Selecione um elemento antes de continuar');
  }
  elementSelect.remove();
}
