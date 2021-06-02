let inputBox = document.getElementById('texto-tarefa');
let applyButton = document.getElementById('criar-tarefa');
let ordenatedList = document.getElementById('lista-tarefas');

let listArray = [];

//APAGAR DEPOIS
function auxiliar(){
	console.log(listArray);
	console.log(inputBox.value.length);
}



//add inputs ao array
applyButton.addEventListener('click', function(){
	if(inputBox.value.length !== 0){
		listArray.push(inputBox.value);
	}


	auxiliar();
})

//remove class selected
function classRemover(){
	for(let i = 0; i < ordenatedList.children.length;i++){
		ordenatedList.children[i].classList.remove('selected');
	}
}

function completeTask(){
	for(let i in ordenatedList.children.classList){
		if(ordenatedList.children[i].classList[i] === 'completed'){
			return;
		}else{
			ordenatedList.children[i].classList.add('completed');
		}
	}
}

//pega o valor do array e pusha no OL
function listFill(){
	console.log(inputBox.value);
	if(inputBox.value.length > 0){
		
		ordenatedList.appendChild(document.createElement('li'));
		for(let i = 0; i < listArray.length; i++){
			ordenatedList.children[i].innerText = listArray[i];
			ordenatedList.children[i].className = 'liGenerated';
			
			//remove selected e add selected
			ordenatedList.children[i].addEventListener('click', function(){
				classRemover();
				ordenatedList.children[i].classList.add('selected');
			})

			//add event completed
			ordenatedList.children[i].addEventListener('dbclick', completeTask);

		}

	}else{
		alert('caixa de texto vazia');
	}

	//apaga conteudo da caixa
	inputBox.value = '';
	
}
applyButton.addEventListener('click', listFill);



//add event listener to li's
for(let i =0; i<document.getElementsByClassName('liGenerated').length; i++){
	document.getElementsByClassName('liGenerated')[i]
}






/*
function completeTask(){
	for(let i in document.getElementsByClassName('liGenerated').classList){
		if(ordenatedList.children[i].classList[i] === 'completed'){
			return;
		}else{
			ordenatedList.children[i].classList.add('completed');
		}
	}
}
*/