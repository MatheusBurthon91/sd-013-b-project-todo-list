window.onload = function(){
}

function addItem(){ 
    const parentElement = document.getElementById("lista-tarefas");
    let input = document.getElementById('texto-tarefa').value;
    let newItem = document.createElement('li');
    newItem.innerHTML = input;
    parentElement.appendChild(newItem);
    document.querySelector('input').value = '';
}

let button = document.querySelector("button");
button.addEventListener("click", addItem);

const itemList =  document.querySelector('#lista-tarefas');
itemList.addEventListener("click", function () {
    for (let index = 0; index < itemList.children.length; index += 1) {
     itemList.children[index].classList.toggle('selected');
    }
})


const itemListCompleted =  document.querySelector('#lista-tarefas');
itemListCompleted.addEventListener("dblclick", function () {
    for (let index = 0; index < itemListCompleted.children.length; index += 1) {
     itemListCompleted.children[index].classList.toggle('completed');
    }
})

