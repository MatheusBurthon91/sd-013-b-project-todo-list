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


function classRemover(){
	for(let i = 0; i < ordenatedList.children.length;i++){
		ordenatedList.children[i].classList.remove('selected');
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
			ordenatedList.children[i].addEventListener('click', classRemover);
			ordenatedList.children[i].addEventListener('click', function(){
				ordenatedList.children[i].classList.add('selected');
			})
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






