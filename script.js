/*  Exercício feito com ajuda de Alef Sloan.
    Ideia do toggle class com ajuda de Milena Leme. */


function gray(item) {
  let grayItems = document.getElementsByClassName('cinza');
  for (let element of grayItems) {
    element.classList.remove("cinza");
  }
  item.target.classList.add('cinza');
}

function cross(item) {
  item.target.classList.toggle('completed');
}

function newItem() {
  const task = document.getElementById('texto-tarefa');
  const tasklist = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');

  newTask.innerText = task.value;
  tasklist.appendChild(newTask);
  task.value = '';
  newTask.addEventListener('click', gray);
  newTask.addEventListener('dblclick', cross);
}

function eraseList() {
  let tasklist = document.getElementById('lista-tarefas');
  for(let index = tasklist.children.length - 1; index >= 0; index -= 1) {
    tasklist.children[index].remove();
  }
}

function eraseDone() {
  let tasklist = document.getElementById('lista-tarefas');
  for(let index = tasklist.children.length - 1; index >= 0; index -= 1) {
    if (tasklist.children.getAttribute('class') == 'completed') tasklist.children[index].remove();
  }
}

/* let tasklist = document.getElementById('lista-tarefas');

for (let index = 1; index < 5; index += 1) {
  let currentTask = document.createElement('li');
  currentTask.innerText = `item ${index}`;
  currentTask.addEventListener('click', gray);
  currentTask.addEventListener('dblclick', cross);
  tasklist.appendChild(currentTask);
} */