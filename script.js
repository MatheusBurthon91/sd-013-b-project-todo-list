const toDoList = document.querySelector('#lista-tarefas');

function resetColor() {
  const liColor = document.querySelectorAll('li');
  for (let index = 0; index < liColor.length; index += 1) {
    liColor[index].style.backgroundColor = 'white';
  }
}

function changeColor() {
  const liColor = document.querySelectorAll('li');
  for (let index = 0; index < liColor.length; index += 1) {
    liColor[index].addEventListener('click', () => {
      if (liColor[index].style.backgroundColor !== 'rgb(128, 128, 128)') {
        resetColor();
        liColor[index].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });
  }
}

function scratchTask() {
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('list')) {
      if (event.target.className === ('list completed')) {
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
