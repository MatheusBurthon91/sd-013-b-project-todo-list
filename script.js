window.onload = function() {
  heroTitle();
  explain();
  input();
  activityList();
  createButton();
  highlightItem();
};

function heroTitle() {
  const title = document.createElement('h1');
  title.innerText = 'Minha Lista de Tarefas';
  document.querySelector('header').appendChild(title);
}

function explain() {
  const text = document.createElement('p');
  text.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  text.id = 'funcionamento';
  document.querySelector('header').appendChild(text);
}

function input() {
  const box = document.createElement('input');
  box.id = 'texto-tarefa';
  document.querySelector('main').appendChild(box);
}

function activityList() {
  const list = document.createElement('ol');
  list.id = 'lista-tarefas';
  document.querySelector('main').appendChild(list);
}

function createButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  document.querySelector('main').appendChild(button);
  addToList();
}

function addToList() {
  document.querySelector('#criar-tarefa').addEventListener ('click', () => {
  const inputText = document.querySelector('#texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerText = inputText;
  document.querySelector('ol').appendChild(newItem);
  document.querySelector('#texto-tarefa').value = null;
  });
}

function highlightItem() {
  let list = document.querySelector('ol');
  list.addEventListener ('click', highlight, false);
  function highlight(event) {
    if (event.target !== event.currentTarget) {
      const clickedItem = event.target;
      clickedItem.style.backgroundColor = 'rgb(128,128,128)';
    }
  }
}
