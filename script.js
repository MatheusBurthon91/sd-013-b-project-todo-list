const buttonAdicionar = document.querySelector('#criar-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const buttonPaga= document.querySelector('#apaga-tudo');
function tarefa() {
  const textInp = document.querySelector('#texto-tarefa');
  const creatLi = document.createElement('li');
  listaOrdenada.appendChild(creatLi);
  creatLi.innerText = textInp.value;
  textInp.value = '';
}

buttonAdicionar.addEventListener('click', tarefa);

function colorElement(event) {
  let classLista = document.querySelector('.lista'); 
  if (classLista !== null) {
    classLista.classList.remove('lista');
  }
  event.target.className = 'lista';
}

listaOrdenada.addEventListener('click', colorElement);

function duploClick(event) {
  let classLista = document.querySelector('.completed');
  
  if (classLista !== null) {
    classLista.classList.remove('completed');     //se .completed for diferente de nulo remove .completed,  se nao adiciona .completed
  }
  let adiciona = event.target.className = 'completed';
  
}
//eu quero que o evento suma apos clicar duas vezes 
listaOrdenada.addEventListener('dblclick', duploClick);

function removeList() {
  let lista = document.querySelectorAll('li')
  if(lista !== ''){
    listaOrdenada.remove(document.querySelector('li'))
    
  }
  
}

buttonPaga.addEventListener('click', removeList)
