window.onload = function(){
  const btnOk = document.getElementById('criar-tarefa')
  const olTasks = document.getElementById('lista-tarefas')
  btnOk.addEventListener('click', createTasks)
  olTasks.addEventListener('click', changeBackGround)
}

function createTasks(){
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  let conteudo = document.getElementById('texto-tarefa')
  li.innerText = conteudo.value
  conteudo.value = '';
  ol.appendChild(li)
  console.log('teste');

}

function changeBackGround(event){
  const elementoAlvo = event.target
  elementoAlvo.style.backgroundColor = 'rgb(128, 128, 128)';
console.log(elementoAlvo);
}