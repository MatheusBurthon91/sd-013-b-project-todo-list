function createElement(nameElement, idElementPai) {
  const element = document.createElement(`${nameElement}`);
  const elementPai = document.getElementById(`${idElementPai}`);
  elementPai.appendChild(element);
}

let contador = 0;
function adicionaNaLista() {
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') {
    alert('Escreva algum item');
  } else {
    createElement('li', 'lista-tarefas');
    const elementListItem = document.getElementsByTagName('li');
    elementListItem[contador].innerHTML = inputValue;
    document.getElementById('texto-tarefa').value = '';
    contador += 1;
  }
}

document.getElementById('criar-tarefa').addEventListener('click', adicionaNaLista);
