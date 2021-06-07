const buttonText = document.getElementById('criar-tarefa');

function itemSelect(event) {
  const item = event.target;
  const select = document.getElementsByClassName('itemList');
  if (item.classList.contains('itemList')) {
    //
  } else if (select.length === 0) {
    item.classList.add('itemList');
  } else {
    select[0].classList.remove('itemList');
    item.classList.add('itemList');
  }
}

function strikeItem(event) {
  const item2 = event.target;
  if (item2.classList.contains('completed')) {
    item2.classList.remove('completed');
  } else {
    item2.classList.add('completed');
  }
}

function clickList() {
  const mainList = document.getElementById('lista-tarefas');
  const text = document.getElementById('texto-tarefa');
  const list = document.createElement('li');
  list.innerText = text.value;
  mainList.appendChild(list);
  text.value = '';
  mainList.lastElementChild.addEventListener('click', itemSelect);
  mainList.lastElementChild.addEventListener('dblclick', strikeItem);
}

buttonText.addEventListener('click', clickList);
