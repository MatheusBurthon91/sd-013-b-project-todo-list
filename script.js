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

const button = document.querySelector("button");
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

const deleteEveryt = document.querySelector('#apaga-tudo');
function deleteItems (e) {
	while (itemList.hasChildNodes()){
		itemList.removeChild(itemList.firstChild);
	}
	console.log(e.target);
}

deleteEveryt.addEventListener("click", deleteItems);
