const toDoList = document.querySelector('#lista-tarefas');

function resetColor() {
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].className.includes('selected')) {
      list[index].style.backgroundColor = 'white';
      list[index].classList.remove('selected');
    }
  }
}

function changeColor() {
  const list = document.querySelectorAll('.list');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', () => {
      if (list[index].style.backgroundColor !== 'rgb(128, 128, 128)') {
        resetColor();
        list[index].classList.add('selected');
        list[index].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });
  }
}

function scratchTask() {
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('list')) {
      if (event.target.className.includes('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    }
  }, false);
}
scratchTask();

function newList() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const text = document.querySelector('#texto-tarefa');
    const listli = document.createElement('li');
    listli.className = 'list';
    listli.innerHTML = text.value;
    toDoList.appendChild(listli);
    text.value = '';
    changeColor();
  });
}
newList();

function deleteList() {
  const button = document.querySelector('#apaga-tudo');
  button.addEventListener('click', () => {
    toDoList.replaceChildren();
  });
}
deleteList();

function removeFinished() {
  const button = document.querySelector('#remover-finalizados');
  button.addEventListener('click', () => {
    const list = document.querySelectorAll('.list');
    for (let index = 0; index < list.length; index += 1) {
      if (list[index].className.includes('completed')) {
        list[index].remove();
      }
    }
  });
}
removeFinished();

function saveTheList() {
  const button = document.querySelector('#salvar-tarefas');
  button.addEventListener('click', () => {
    const list = document.querySelectorAll('.list');
    localStorage.clear();
    for (let index = 0; index < list.length; index += 1) {
      localStorage.setItem(`list ${[index]}`, `${list[index].innerHTML}`);
      localStorage.setItem(`class ${[index]}`, `${list[index].className}`);
    }
  });
}
saveTheList();

function returnList() {
  const storage = localStorage.length / 2;
  for (let index = 0; index < storage; index += 1) {
    const list = document.createElement('li');
    list.innerHTML = localStorage.getItem(`list ${[index]}`);
    list.className = localStorage.getItem(`class ${[index]}`);
    toDoList.appendChild(list);
  }
  changeColor();
}
returnList();

function moveUp() {
  const button = document.querySelector('#mover-cima');
  button.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected !== null && selected.previousSibling !== null) {
      const selectedText = selected.innerHTML;
      const nextSelectedText = selected.previousSibling.innerHTML;
      const selectedClass = selected.className;
      const nextSelectedClass = selected.previousSibling.className;
      const selectedColor = selected.style.backgroundColor;
      const nextSelectedColor = selected.previousSibling.style.backgroundColor;
      selected.innerHTML = nextSelectedText;
      selected.previousSibling.innerHTML = selectedText;
      selected.className = nextSelectedClass;
      selected.previousSibling.className = selectedClass;
      selected.style.backgroundColor = nextSelectedColor;
      selected.previousSibling.style.backgroundColor = selectedColor;
    }
  });
}
moveUp();

function moveDown() {
  const button = document.querySelector('#mover-baixo');
  button.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected !== null && selected.nextSibling !== null) {
      const selectedText = selected.innerHTML;
      const nextSelectedText = selected.nextSibling.innerHTML;
      const selectedClass = selected.className;
      const nextSelectedClass = selected.nextSibling.className;
      const selectedColor = selected.style.backgroundColor;
      const nextSelectedColor = selected.nextSibling.style.backgroundColor;
      selected.innerHTML = nextSelectedText;
      selected.nextSibling.innerHTML = selectedText;
      selected.className = nextSelectedClass;
      selected.nextSibling.className = selectedClass;
      selected.style.backgroundColor = nextSelectedColor;
      selected.nextSibling.style.backgroundColor = selectedColor;
    }
  });
}
moveDown();

function deleteSelected() {
  const btnDelete = document.querySelector('#remover-selecionado');
  btnDelete.addEventListener('click', () => {
    document.querySelector('.selected').remove();
  });
}
deleteSelected();
