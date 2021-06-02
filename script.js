let buttonSubmit = document.querySelector('#criar-tarefa')

buttonSubmit.addEventListener('click', makeAssign);

function makeAssign() {
  let textAssign = document.querySelector('#lista-tarefas');
  let input = document.querySelector('#input');
  let li = document.createElement('li');
  li.innerText = input;
  textAssign.appendChild(li);
  // creatText.innerText = '';
}