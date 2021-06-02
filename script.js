const button = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas'); //ol

function addTask() {
  //pegar o conteudo do input e adicionar como uma nova li da ol
  let inputValue = document.querySelector('input').value; //input
  const newValue = document.createElement('li'); //li
  newValue.appendChild(document.createTextNode(inputValue));
  list.appendChild(newValue);
  document.querySelector('input').value = '';
}
button.addEventListener('click', addTask);

function changeColor(event) {
  let grayColor = 'rgb(128,128,128)'
  let clickedLi = event.target
  clickedLi.style.backgroundColor = grayColor
}
list.addEventListener('click', changeColor);







