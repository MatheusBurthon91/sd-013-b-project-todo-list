window.onload = function(){
  const btnOk = document.getElementById('criar-tarefa')
  
  btnOk.addEventListener('click', createTasks)
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
