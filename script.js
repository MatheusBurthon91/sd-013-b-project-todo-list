window.onload = function () {
  const btnOk = document.getElementById('criar-tarefa');
  const olTasks = document.getElementById('lista-tarefas');
  const btnApagar = document.getElementById('apaga-tudo');
  const btnApagComplet = document.getElementById('remover-finalizados');
  const btnSalvar = document.getElementById('salvar-tarefas');
  btnOk.addEventListener('click', createTasks);
  olTasks.addEventListener('click', changeBackGround);
  olTasks.addEventListener('dblclick', completeTasks);
  btnApagar.addEventListener('click', clearConteiner);
  btnApagComplet.addEventListener('click', clearCompleted);
  btnSalvar.addEventListener('click', salvarTarefas);

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
