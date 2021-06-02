const taskButton = document.querySelector('#criar-tarefa');
const addTask = document.querySelector('#texto-tarefa');

// Criação da Função que remove o background de todas as listas.
function removeBackground(){
  let listOfLists = document.querySelectorAll('.toDoTask')
  for( let index1 of listOfLists){
    index1.style.backgroundColor = '';
  }
}

// Criação da Função que torna o Background do item selecionado cinza.
function changeBackground (event1){
  let abc = event1.target.style.backgroundColor;
    removeBackground();
    event1.target.style.backgroundColor = 'rgb(128,128,128)'
}
// Cria função responsável por riscar o texto
function changeText(event2){
  if (event2.target.classList.length === 1){
    event2.target.className += ' completed';
    console.log(event2.target.classList)
  }else if (event2.target.classList.length === 2) {
    event2.target.classList.remove('completed');
    console.log(event2.target.classList)
  }
}

// Adciona EventListener no butão que ao ser clicado
function addListItem (){
  let newTask = document.createElement('li')
  if (addTask.value != '') {
    newTask.innerText = addTask.value;
    document.querySelector('#lista-tarefas').appendChild(newTask)
    newTask.className = 'toDoTask'; 
    newTask.addEventListener('click', changeBackground);
    newTask.addEventListener('dblclick', changeText);
    addTask.value = '';
  }  
}  
taskButton.addEventListener('click',  addListItem)
