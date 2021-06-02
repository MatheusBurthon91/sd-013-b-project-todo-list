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
  let classesSelects = document.getElementsByClassName('select')
  for (let index = 0; index < classesSelects.length; index += 1){
    classesSelects[index].className = '';
  }
  elementoAlvo.className = 'select'
console.log(elementoAlvo);
}