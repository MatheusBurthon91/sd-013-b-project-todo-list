const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

// criando a lista
function createList() {
  const text = document.getElementById('texto-tarefa');
  const listOrd = document.createElement('li');

  //  adicionando o texto na li
  if (text.value !== '') {
    listOrd.innerText = text.value;
    list.appendChild(listOrd);
    listOrd.style.backgroundColor = 'white'
  } else {

  }
  text.value = '';
}

//  criando o botão que vai adicionar a list
button.addEventListener('click', createList);

// pega os filhos da ol
const section1 = document.getElementById('lista-tarefas');

function setColor(event) {
  const clickColor = event.target;
  clickColor.style.backgroundColor = 'rgb(128, 128, 128)'
}

  section1.addEventListener('click', setColor);
