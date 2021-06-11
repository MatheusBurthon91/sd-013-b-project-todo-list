let list = document.querySelector('#lista-tarefas')
let input = document.querySelector('#texto-tarefa')
let button = document.querySelector('#criar-tarefa')

function Makelist() {
  let text = input.value
  let li = document.createElement('li')
  li.innerHTML = text
  list.appendChild(li)
  input.value = ''
}
button.addEventListener('click', Makelist)

function changeColor(event) {
  remove()
  event.target.classList.add('selected')
}
list.addEventListener('click', changeColor)

function remove() {
  let removeClass = document.querySelectorAll('.selected')[0]
  if (removeClass) {
    removeClass.classList.remove('selected')
  }
}

function riscar(event) {
  event.target.classList.toggle('completed')
}
list.addEventListener('dblclick', riscar)
