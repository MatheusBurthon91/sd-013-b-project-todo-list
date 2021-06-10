function changeColor (event){
  const list = document.getElementsByTagName('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('selected')) {
      list[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

function completeTask(event) {
  const getLi = document.getElementsByTagName('li');
  for (let index = 0; index < getLi.length; index += 1) {
  }
  event.target.classList.toggle('completed');
}

function createTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  button.addEventListener('click', function () {
    if (input.value.length > 0) {
      const listItem = document.createElement('li');
      listItem.innerText = input.value;
      listItem.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
      listItem.addEventListener('click', changeColor);
      listItem.addEventListener('dblclick', completeTask);
      list.appendChild(listItem);
      input.value = '';
    } else {
      alert('Digite ao menos 1 caractere');
    }
  });
}

createTask();

function clear() {
  const getOl = document.getElementById('lista-tarefas');
  getOl.innerHTML = '';
}

const resetButton = document.createElement('button');
resetButton.id = 'apaga-tudo';
resetButton.innerHTML = 'Apagar';
resetButton.addEventListener('click', clear);
const btncontainer = document.querySelector('.button-container');
btncontainer.appendChild(resetButton);
