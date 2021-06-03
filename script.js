

//essa funcao seleciona a tarefa dentro da ol
function mudaClasse(event)  {
  let li = event.target
  const lItem = document.getElementsByClassName('selected')[0] 
  if (lItem)  { 
    lItem.classList.remove('selected') 
  } 
  li.classList.add('selected')
}



//Clicar 2x faz com que ele seja riscado, indicando que foi completo.
//deve ser possivel desfazer ssa acao clicando novamente duas x no item
function markComplete(event) {
  let li = event.target
  
  if (li.className !== 'item completed selected'){
    li.classList.add('completed')
  } else {
    li.classList.remove('completed')
    // console.log(li.className)
  }
} 




//funcao para colocar a skill na lista
function getText()  {
  // let texto = document.getElementById('texto-tarefa').value
  // console.log(texto)
  let li = document.createElement('li')
  li.innerText = document.getElementById('texto-tarefa').value
  li.addEventListener('click', mudaClasse)
  li.addEventListener('dblclick', markComplete)
  li.className = ('item')
  let ol = document.getElementById('lista-tarefas')
  ol.appendChild(li)
  // console.log(ol)
  document.getElementById('texto-tarefa').value = null;
}



function pegaTexto()  {
  const adiciona = document.getElementById('criar-tarefa')
  adiciona.addEventListener('click', getText)
}




//entender isso melhor na monitoria ;)
function rmIt(){
  let ol = document.getElementById('lista-tarefas')
  let lis = document.getElementsByTagName('li')
  console.log(lis,'teste')
  while(ol.hasChildNodes()){
    ol.removeChild(ol.firstChild)
  }

}


function rmAll()  {
  const rmButt = document.getElementById('apaga-tudo')
  rmButt.addEventListener('click', rmIt)
}


pegaTexto()
rmAll()

