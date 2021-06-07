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

function createButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  document.querySelector('main').appendChild(button);
  addToList();
}

// As funções a seguir, removeColor e addColor, foram feitas baseadas no código apresentado no vídeo "Handling Events for Multiple Elements" do canal KIRUPA
// (https://www.youtube.com/watch?v=Xwq1Hj1DyDM&t=303s)

function removeColor() {
  const selected = document.getElementsByClassName('selected');
  const list = document.querySelector('ol');
  list.addEventListener('click', () => {
    if (selected.length !== 0) {
      selected[0].removeAttribute('style');
      selected[0].classList.remove('selected');
    }
  });
}

function addColor(event) {
  if (event.target !== event.currentTarget) {
    const clickedItem = event.target;
    clickedItem.classList.add('selected');
    clickedItem.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function highlightItem() {
  removeColor();
  const list = document.querySelector('ol');
  list.addEventListener('click', addColor, false);
}

function addRemoveLine(event) {
  if (event.target !== event.currentTarget) {
    const clickedItem = event.target;
    if (clickedItem.classList.contains('completed')) {
      clickedItem.classList.remove('completed');
    } else {
      clickedItem.classList.add('completed');
    }
  }
}

function completeItem() {
  const list = document.querySelector('ol');
  list.addEventListener('dblclick', addRemoveLine, false);
}

function clearList() {
  const button = document.querySelector('#apaga-tudo');
  const list = document.querySelector('ol');
  button.addEventListener('click', () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
}

function clearButton() {
  const button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = 'Apagar tudo';
  document.querySelector('main').appendChild(button);
  clearList();
}

// Esta função foi criada com base em uma resposta pelo usuário Krasimir no Stack Overflow
// (https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul)

function clearCompletedList() {
  const button = document.querySelector('#remover-finalizados');
  button.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.completed');
    for (let index = 0; li = listItems[index]; index += 1) {
      li.parentNode.removeChild(li);
    }
  });
}

function clearCompletedButton() {
  const button = document.createElement('button');
  button.id = 'remover-finalizados';
  button.innerText = 'Apagar finalizados';
  document.querySelector('main').appendChild(button);
  clearCompletedList();
}

window.onload = function () {
  heroTitle();
  explain();
  input();
  activityList();
  createButton();
  highlightItem();
  completeItem();
  clearButton();
  clearCompletedButton();
};
