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
    elementListItem[index].style.backgroundColor = 'white';
  }
}

function changeBackground(event) {
  limparMarcações();
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = 'rgb(128,128,128)';
}

function adicionaNaLista() {
  const inputValue = document.getElementById('texto-tarefa').value;
  if (inputValue === '') {
    alert('Escreva algum item');
  } else {
    createElement('li', 'lista-tarefas');
    // Adiciona o texto do input no 'li' do HTML
    elementListItem[contador].innerHTML = inputValue;
    elementListItem[contador].addEventListener('click', changeBackground);
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
