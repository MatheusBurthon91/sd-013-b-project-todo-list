function addItem() {
    const list = document.getElementById('lista-tarefas')
    const li = document.createElement('li');
    li.setAttribute('class', 'li-style');
    list.appendChild(li);
    const task = document.getElementById('texto-tarefa').value;
    const text = document.createTextNode(task);
    li.appendChild(text);
    document.getElementById('texto-tarefa').value = '';
}
const createBtn = document.getElementById('criar-tarefa');
createBtn.addEventListener('click', addItem);


/*function select(event) {
    const selectedColor = document.getElementsByClassName('li-style');
    for (let index = 0; index < selectedColor.length; index += 1) {
      const selectColor = selectedColor[index];
      selectColor.className = 'li-style';
    }
    const events = event;
    events.target.classList.add('selected');
}
const list = document.getElementById('lista-tarefas');
list.addEventListener('click', select);*/


function complete(event) {
    const selectedCompleted = document.getElementsByClassName('li-style');
    event.target.classList.toggle('completed');
}
const itemList = document.getElementById('lista-tarefas');
itemList.addEventListener('dblclick', complete);

function select(event) {
    const selected = document.getElementsByClassName('li-style');
    
    event.target.classList.add('selected');
}
const itensList = document.getElementById('lista-tarefas');
itensList.addEventListener('click', select);

function removeSelect() {
    const removeSelected = document.getElementsByClassName('li-style');
    for(let index = 0; index < removeSelected.length; index += 1) {
        if(removeSelected[index].className.includes('selected')) {
            removeSelected[index].classList.remove('selected');
        }
    }
}
const itensList2 = document.getElementById('lista-tarefas');
itensList2.addEventListener('click', removeSelect);