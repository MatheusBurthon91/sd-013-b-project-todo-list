


//essa funcao seleciona a tarefa dentro da ol
function mudaClasse()  {
  const li = event.target;
  console.log(li.classList)
  if (li.className === 'non-selected'){
  li.classList.add('selected')
  li.classList.remove('non-selected')}
  else {li.classList.add('non-selected')
  li.classList.remove('selected')} 
  
}


//funcao para colocar a skill na lista
function getText()  {
  // let texto = document.getElementById('texto-tarefa').value
  // console.log(texto)
  let li = document.createElement('li')
  li.innerText = document.getElementById('texto-tarefa').value
  li.addEventListener('click', mudaClasse)
  li.className = ('non-selected')
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

