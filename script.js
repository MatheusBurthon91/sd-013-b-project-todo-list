// Requisito 1
const header = document.createElement('header');
document.body.appendChild(header);

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);

// Requisito 2
const paragrafo = document.createElement('p');
paragrafo.id = 'funcionamento';
paragrafo.innerText =
  'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(paragrafo);

// Requisito 3
const input = document.createElement('input');
input.id = 'texto-tarefa';
header.appendChild(input);

// Requisito 4
const sectionList = document.createElement('section');
document.body.appendChild(sectionList);

const orderedList = document.createElement('ol');
orderedList.id = 'lista-tarefas';
sectionList.appendChild(orderedList);

// Requisito 5 e 6
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Inserir';
sectionList.appendChild(button);

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = input.value;
  li.classList = 'item';
  orderedList.appendChild(li);
  input.value = '';
});

// Requisito 7
const li = document.getElementsByTagName('li');
function changeColor() {
  orderedList.addEventListener('click', (event) => {
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].className.includes('gray')) {
        li[index].classList.remove('gray');
      }
      if (li[index].className !== 'gray') {
        event.target.classList.add('gray');
      }
    }
  });
}
changeColor();

// Requisito 10
const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'Limpar Tarefas';
sectionList.appendChild(buttonClear);

function resetBoard() {
  buttonClear.addEventListener('click', () => {
    const itens = document.querySelectorAll('li');
    for (let index = 0; index < itens.length; index += 1) {
      document.querySelector('ol').removeChild(itens[index]);
    }
  });
}
resetBoard();
