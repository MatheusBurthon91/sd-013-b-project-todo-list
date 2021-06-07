let contador = 0;
const elementListItem = document.getElementsByTagName('li');
function createElement(nameElement, idElementPai) {
  // Cria um elemento dentro de outro elemento existente
  const element = document.createElement(`${nameElement}`);
  const elementPai = document.getElementById(`${idElementPai}`);
  elementPai.appendChild(element);
}

function limparMarcações() {
  for (let index = 0; index < elementListItem.length; index += 1) {
    if (elementListItem[index].style.backgroundColor === 'red') {
      // Não faça nada
    } else {
      elementListItem[index].style.backgroundColor = 'white';
    }
  }
}

function changeBackground(event) {
  limparMarcações();
  const eventTarget = event.target;
  if (eventTarget.style.backgroundColor === 'red') {
    // Não faça nada
  } else {
    eventTarget.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function todoCompleted(event) {
  const eventTarget = event.target;
  if (eventTarget.style.backgroundColor !== 'red') {
    // Se a cor do elemento 'li' da lista for difente de vermelho:
    // Torna ele vermelho
    eventTarget.className = 'completed';
    eventTarget.style.backgroundColor = 'red';
  } else if (eventTarget.style.backgroundColor === 'red') {
    // Se ele já for vermelho: torna a ficar branco
    eventTarget.className = '';
    eventTarget.style.backgroundColor = 'white';
  }
}

function adicionaNaLista() {
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') {
    alert('Escreva algum item');
  } else {
    createElement('li', 'lista-tarefas');
    // Adiciona o texto do input no 'li' do HTML
    elementListItem[contador].innerHTML = inputValue;
    // Adiciona evento de marcação no 'li'
    elementListItem[contador].addEventListener('click', changeBackground);
    elementListItem[contador].addEventListener('dblclick', todoCompleted);
    // Reseta o texto do input e adiciona 1 no contador
    document.getElementById('texto-tarefa').value = '';
    contador += 1;
  }
}

// function addEvent(nameElement, eventName, functionSelected) {
//   const elementList = document.getElementsByClassName(`${nameElement}`);
//   for (let index = 0; index < elementList.length; index += 1) {
//     elementList[index].addEventListener(`${eventName}`, functionSelected);
//   }
// }

document.getElementById('criar-tarefa').addEventListener('click', adicionaNaLista);
