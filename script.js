window.onload = function() {
  heroTitle();
  explain();
  input();
  activityList();
  createButton();
  highlightItem();
  completeItem();
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
  newItem.className = 'item';
  newItem.innerText = inputText;
  document.querySelector('ol').appendChild(newItem);
  document.querySelector('#texto-tarefa').value = null;
  });
}

function highlightItem() {
  removeColor();
  const list = document.querySelector('ol');
  list.addEventListener('click', addColor, false);
}

// As funções a seguir, removeClass e addClass, foram feitas baseadas no código apresentado no vídeo "Handling Events for Multiple Elements" do canal KIRUPA (https://www.youtube.com/watch?v=Xwq1Hj1DyDM&t=303s)

function removeColor() {
  const list = document.querySelector('ol');
  const selected = document.getElementsByClassName('selected');
  list.addEventListener('click', () => {
    selected[0].removeAttribute('style');
    selected[0].classList.remove('selected');
  });
}

function addColor(event) {
  if (event.target !== event.currentTarget) {
    const clickedItem = event.target;
    clickedItem.classList.add('selected');
    clickedItem.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function completeItem() {
  const list = document.querySelector('ol');
  list.addEventListener('dblclick', addLine, false);
}

function addLine(event) {
  if (event.target !== event.currentTarget) {
    const clickedItem = event.target;
    clickedItem.classList.add('completed');
  }
}
