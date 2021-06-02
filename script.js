const buttonCreateToDo = document.querySelector('#criar-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
let identificador = 1;

buttonCreateToDo.addEventListener('click', () => {
  const taskName = document.querySelector('#texto-tarefa').value;
  const createOrdedList = document.createElement('li');
  createOrdedList.setAttribute('class', 'toDoListItem');

  createOrdedList.setAttribute('id', `li ${identificador}`);
  identificador += 1;
  toDoList.appendChild(createOrdedList).innerHTML = taskName;
  document.querySelector('#texto-tarefa').value = '';
});

const toDoListItem = document.getElementsByClassName('toDoListItem');

// SOURCE: https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document
window.onclick = (e) => {
  for (let index = 0; index < toDoListItem.length; index += 1) {
    toDoListItem[index].classList.remove('class', 'selected');
  }
  const ab = e.target.tagName;
  if (ab.toString() === 'LI') {
    e.target.className += ' selected';
    e.target.addEventListener('dblclick', () => {
      e.target.classList.add('completed');
    });
    if (e.target.classList.contains('completed')) {
      e.target.addEventListener('dblclick', () => {
        e.target.classList.remove('class', 'completed');
      });
    }
  }
};

const clearAllButton = document.getElementById('apaga-tudo');
clearAllButton.addEventListener('click', () => {
  //   for (let index = 0; index < toDoListItem.length; index += 1) {}
  document.getElementById('lista-tarefas').innerHTML = '';
});

const clearAllCheckedButton = document.getElementById('remover-finalizados');
const getClassChecked = document.getElementsByClassName('completed');
clearAllCheckedButton.addEventListener('click', () => {
  for (let index = 0; index <= getClassChecked.length; index += 1) {
    getClassChecked[0].remove();
  }
});

//   console.log('bob');
