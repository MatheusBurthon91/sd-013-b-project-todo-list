let inputBox = document.getElementById('texto-tarefa');
let applyButton = document.getElementById('criar-tarefa');
let ordenatedList = document.getElementById('lista-tarefas');

let listArray = [];





//add inputs ao array
applyButton.addEventListener('click', function(){
	if(inputBox.value.length !== 0){
		listArray.push(inputBox.value);
	}


	
})

//remove class selected
function classRemover(){
	for(let i = 0; i < ordenatedList.children.length;i++){
		ordenatedList.children[i].classList.remove('selected');
	}
}



//add completed 
function completeTask(event){
	
	if(event.target.classList.contains('completed')){
		event.target.classList.remove('completed');
	}else{
		event.target.classList.add('completed');
	}
	
	
}


//pega o valor do array e pusha no OL
function listFill(){
	
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
			ordenatedList.children[i].addEventListener('dblclick', completeTask);

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

//apaga tudo
function clearList(){
	ordenatedList.innerHTML = '';
	listArray = [];
}
document.getElementById('apaga-tudo').addEventListener('click', clearList);


function deleteSelected(){
	let auxiliar = [];
	
	for(let i = 0; i<listArray.length; i++){
		if(ordenatedList.children[i].classList.contains('completed') === false){
			auxiliar.push(listArray[i]);
		}
		console.log(auxiliar)
	}

	listArray = auxiliar;
	ordenatedList.innerHTML =''; 

	for(let i in listArray){
		ordenatedList.appendChild(document.createElement('li'))
		
		ordenatedList.children[i].innerText = listArray[i];
		ordenatedList.children[i].className = 'liGenerated';

		//remove selected e add selected
		ordenatedList.children[i].addEventListener('click', function(){
			classRemover();
			ordenatedList.children[i].classList.add('selected');
		})

		//add event completed
		ordenatedList.children[i].addEventListener('dblclick', completeTask);
	}
	
}

document.getElementById('remover-finalizados').addEventListener('click', deleteSelected);