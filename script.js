const list = document.querySelector('#lista-tarefas');
const addTask = document.querySelector('#criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
let listItem;

function listMaker(){
    const inputText = inputTask.value;
    listItem = document.createElement('li');
    listItem.classList.add('task')
    listItem.innerText = inputText
    taskList.appendChild(listItem)
    inputTask.value = '';
}

taskButton.addEventListener('click', listMaker)

function selectedItem(event) {
    const liArray = document.getElementsByTagName('li');
    for (let index = 0; index < liArray.length; index += 1) {
        if (event.target.classList.contains('task')) {
            if (liArray[index].classList.contains('selected')) {
                liArray[index].classList.remove('selected')
            }
            event.target.classList.add('selected')
        }
    }
    event.target.classList.add('selected')
}
taskList.addEventListener('click', selectedItem);


















// function createTask() {
//     const addLine = document.createElement('li')
//   addLine.innerText(text);
//   list.appendChild(addLine);
//   document.getElementById('texto-tarefa').value = ' ';
// }

// addTask.addEventListener('click', createTask)
