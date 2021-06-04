

//essa funcao seleciona a tarefa dentro da ol
//a ser entendido melhor
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
  
  if (li.classList.contains('completed')){
    li.classList.remove('completed')
  } else {
    li.classList.add('completed')
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
  while(ol.hasChildNodes()){
    ol.removeChild(ol.firstChild)
  }
}


function rmAll()  {
  const rmButt = document.getElementById('apaga-tudo')
  rmButt.addEventListener('click', rmIt)
}










function rmCom()  {
  let ol = document.getElementById('lista-tarefas')
  let lis = document.querySelectorAll('.completed')
  for (let index = 0; index < lis.length; index += 1){
    ol.removeChild(lis[index])
  }
}




function rmvSel() {
  const rmSel = document.getElementById('remover-finalizados')
  rmSel.addEventListener('click', rmCom)
}









pegaTexto()
rmAll()
rmvSel()
