window.onload = function(){
}

function addItem(){ 
    const parentElement = document.getElementById("lista-tarefas");
    let input = document.getElementById('texto-tarefa').value;
    let newItem = document.createElement('li');
    newItem.innerHTML = input;
		// thread do stackOverFlow me ajudou a parar a função addItem caso a condição fosse atendida: https://stackoverflow.com/questions/3536055/stopping-a-javascript-function-when-a-certain-condition-is-met;
		if (input === '') {
			alert('Impossível adicionar item vazio à lista');
			return;
		}
    parentElement.appendChild(newItem);
    document.querySelector('input').value = '';
		localStorage.setItem("item", newItem.innerHTML);
}

const button = document.querySelector("button");
button.addEventListener("click", addItem);

const itemList =  document.querySelector('#lista-tarefas');
itemList.addEventListener("click", function (e) {
    for (let index = 0; index < itemList.children.length; index += 1) {
     itemList.children[index].classList.toggle('selected');
		 console.log(e.target);
    }
});

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

function removeCompleted () {
	const finished = document.querySelectorAll('.completed');
	for (let index = 0; index < finished.length; index += 1){
	finished[index].remove();
	return removeCompleted();
	}
}

const removeFinished = document.querySelector('#remover-finalizados');
removeFinished.addEventListener("click", removeCompleted);
