


//funcao para colocar a skill na lista
function getText()  {
  // let texto = document.getElementById('texto-tarefa').value
  // console.log(texto)
  let li = document.createElement('li')
  li.innerText = document.getElementById('texto-tarefa').value
  let ol = document.getElementById('lista-tarefas')
  ol.appendChild(li)
  // console.log(ol)
  document.getElementById('texto-tarefa').value = null;
}



function pegaTexto()  {
  const adiciona = document.getElementById('criar-tarefa')
  adiciona.addEventListener('click', getText)


  
}


pegaTexto()