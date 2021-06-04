// Criando o botão ADD
const btns = document.getElementById('inputs');
const btnAdd = document.createElement('button');
btnAdd.innerText = 'Adicionar';
btnAdd.id = 'criar-tarefa';
btns.appendChild(btnAdd);

// Criando o botão reiniciar
const btnRes = document.createElement('button');
btnRes.innerText = 'Reiniciar';
btnRes.id = 'apaga-tudo';
btns.appendChild(btnRes);

// Criando o botão delete
const btnDel = document.createElement('button');
btnDel.innerText = 'Deletar Feitos';
btnDel.id = 'remover-finalizados';
btns.appendChild(btnDel);

// Função para adicionar itens na lista
function addAssignment() {
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  item.className = 'itens';
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('texto-tarefa').value = '';

  const itens = document.querySelectorAll('.itens'); // pega todos os 'li'
  itens[itens.length - 1].addEventListener('click', function () {
    deletColor(itens);
    itens[itens.length - 1].classList.add('selected');// Evento click
  });

  itens[itens.length - 1].addEventListener('dblclick', doneNotDone);
  function doneNotDone() {
    if (itens[itens.length - 1].classList.contains('completed')) {
      itens[itens.length - 1].classList.remove('completed');
    } else {
      itens[itens.length - 1].classList.add('completed');
    }
  }
}

function deletColor(itens) {
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
    return itens;
  }
}

function delAll() {
  const fatherItens = document.getElementById('lista-tarefas');

  while (fatherItens.firstChild) {
    fatherItens.removeChild(fatherItens.firstChild);
  }
}

function delFeats() {
  const itens = document.getElementsByClassName('completed');

  for (let index = itens.length - 1; index >= 0; index -= 1) {
    itens[index].parentNode.removeChild(itens[index]);
  }
}

// Funcionalidade do btnAdd
btnAdd.addEventListener('click', addAssignment);

// Funcionalidade do btnDel
btnRes.addEventListener('click', delAll);

// Funcionalidade do btnDel
btnDel.addEventListener('click', delFeats);
