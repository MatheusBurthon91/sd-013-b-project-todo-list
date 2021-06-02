const button = document.getElementById('criar-tarefa');


function addTask() {
  //pegar o conteudo do input e adicionar como uma nova li da ol
  let inputValue = document.querySelector('input').value; //input
  const list = document.getElementById('lista-tarefas'); //ol
  const newValue = document.createElement('li'); //li
  newValue.appendChild(document.createTextNode(inputValue));
  list.appendChild(newValue);
  document.querySelector('input').value = '';
}
button.addEventListener('click', addTask);








