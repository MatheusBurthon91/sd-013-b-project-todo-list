if (localStorage.getItem('saveItem') !== null) {
  document.documentElement.innerHTML = localStorage.getItem('saveItem');
}

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
// requisito 9 e 8

window.onclick = (e) => {
  const ab = e.target.tagName;
  if (ab.toString() === 'LI') {
    for (let index = 0; index < toDoListItem.length; index += 1) {
      toDoListItem[index].classList.remove('class', 'selected');
    }
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

// requisito 10
const clearAllButton = document.getElementById('apaga-tudo');
clearAllButton.addEventListener('click', () => {
  //   for (let index = 0; index < toDoListItem.length; index += 1) {}
  document.getElementById('lista-tarefas').innerHTML = '';
});

// requisito 11
const clearAllCheckedButton = document.getElementById('remover-finalizados');
const getClassChecked = document.getElementsByClassName('completed');
clearAllCheckedButton.addEventListener('click', () => {
  if (getClassChecked.length > 0) {
    for (let index = 0; index <= getClassChecked.length; index += 1) {
      getClassChecked[0].remove();
    }
  }
});
// let b = document.cookie(cookie, a);
// requisito 12

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', () => {
  const a = document.documentElement.innerHTML;
  localStorage.removeItem('saveItem');
  localStorage.setItem('saveItem', a);
  //   if (getClassChecked.length > 0) {
  console.log('bobSave');
  //   }
});

// requisito 13 Up
const moveUp = document.getElementById('mover-cima');
moveUp.addEventListener('click', () => {
  //   if (getClassChecked.length > 0) {
  //     for (let index = 0; index <= getClassChecked.length; index += 1) {
  //       getClassChecked[0].remove();
  //     }
  //   }
  console.log('bobUp');
});

// requisito 13 Down
const moveDown = document.getElementById('mover-baixo');
moveDown.addEventListener('click', () => {
  //   if (getClassChecked.length > 0) {
  //     for (let index = 0; index <= getClassChecked.length; index += 1) {
  //       getClassChecked[0].remove();
  //     }
  //   }
  console.log('bobDown');
});

// requisito 14
const clearSelectedButton = document.getElementById('remover-selecionado');
const getClassSelected = document.getElementsByClassName('selected');
clearSelectedButton.addEventListener('click', () => {
  if (getClassSelected.length > 0) {
    getClassSelected[0].remove();
  }
});

//   console.log('bob');
