function createElement(nameElement, idElementPai) {
  const element = document.createElement(`${nameElement}`);
  const elementPai = document.getElementById(`${idElementPai}`);
  elementPai.appendChild(element);
}

function adicionaNaLista() {
  createElement('li', 'lista-tarefas');
  console.log(document.getElementById('texto-tarefas').nodeValue);
}

document.getElementById('criar-tarefa').addEventListener('click', adicionaNaLista);
