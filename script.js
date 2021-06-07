const buttonText = document.getElementById('criar-tarefa');
const listItem = document.getElementsByTagName('li');

function clickList() {
  const mainList = document.getElementById('lista-tarefas');
  const text = document.getElementById('texto-tarefa');
  const list = document.createElement('li');
  list.innerText = text.value;
  mainList.appendChild(list);
  text.value = '';
  mainList.lastElementChild.addEventListener('click', itemSelect);
}

buttonText.addEventListener('click', clickList);

function itemSelect(event) {
    const item = event.target;
    const select = document.getElementsByClassName('itemList');
    if (item.classList.contains('itemList')) {
        //
    } else if (select.length === 0) {
        item.classList.add('itemList');
    }
}