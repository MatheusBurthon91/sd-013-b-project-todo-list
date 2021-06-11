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
  event.target.classList.add('select')
}
list.addEventListener('click', changeColor)

function remove() {
  let removeClass = document.querySelectorAll('.select')[0]
  if (removeClass) {
    removeClass.classList.remove('select')
  }
}

function riscar(event) {
  event.target.classList.toggle('completed')
}
list.addEventListener('dblclick', riscar)
