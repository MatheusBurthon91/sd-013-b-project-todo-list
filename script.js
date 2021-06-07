let lista = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa')
let button = document.querySelector('#criar-tarefa')
function criarli(){
let valor = input.value
let li = document.createElement('li')
li.innerHTML = valor
lista.appendChild(li)
input.value = ''
}
button.addEventListener('click', criarli)

function alteracor(event){
 remove()
event.target.classList.add('select')
}
lista.addEventListener('click', alteracor)

function remove(){
let removeClass = document.querySelectorAll('.select')[0]
if(removeClass){
    removeClass.classList.remove('select')
}
}

function risca(event){
 event.target.classList.toggle('completed')
}
lista.addEventListener('dblclick', risca )
