const buttonAdd = document.querySelector('#criar-tarefa')

buttonAdd.addEventListener('click', () => {
  const lista = document.querySelector('#lista-tarefas')
  const input = document.querySelector('#texto-tarefa')
  const li = document.createElement('li')
  lista.appendChild(li);
  li.innerText = input.value;
  input.value = ''
})