//5
document.body.backgroundColor = 'teal';
let taskList = document.getElementById('lista-tarefas');
let addButton = document.getElementById('criar-tarefa');
let clearButton =  document.getElementById('apaga-tudo');

function addTask() {
    let content = document.getElementById('texto-tarefa');
    let task = document.createElement('li');
    let contentText = content.value;
    task.innerText = contentText;
    task.className = 'list-item';
    taskList.appendChild(task);
    content.value = '';
}

addButton.addEventListener('click', addTask);

function changeBGColor(event) {    
    let listItemsArray = document.getElementsByClassName('list-item');
    for (let index = 0; index < listItemsArray.length; index += 1) {
      if (listItemsArray[index].classList.contains('selected')) {
        listItemsArray[index].classList.remove('selected');
        listItemsArray[index].style.backgroundColor = 'white';
    } else {
      event.target.classList.add('selected');
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

taskList.addEventListener('click', changeBGColor);

function crossItem(event) {
  if(event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = 'none';
  } else {
    event.target.classList.add('completed');
    event.target.style.textDecoration = 'line-through';
  }
}

taskList.addEventListener('dblclick', crossItem);

function clearList() {
  taskList.innerHTML = '';
}

clearButton.addEventListener('click', clearList);