

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
//funcao q acaba tudo
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









//pergunta, existe um removeChild usando o proprio elemento html?
//essa funcao remove os itens concluidos(risacados) da lista
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









//funcao para salvar os dados e reabrir ao abrir a pagina
//duvida, e possivel salvar o elemento html para depois appendar??
function sav() {
  let lis = document.getElementsByTagName('li')
  let arrayText = [];
  let arrayClass = [];
  for (let index = 0; index < lis.length; index += 1){
    arrayText.push(lis[index].innerHTML) 
    arrayClass.push(lis[index].className)
  } 
  localStorage.setItem('texto', JSON.stringify(arrayText))
  localStorage.setItem('classes', JSON.stringify(arrayClass))
  console.log(arrayClass)
}




function save() {
  const saveButt = document.getElementById('salvar-tarefas')
  saveButt.addEventListener('click', sav)
}






//funcao para restaurar

function restore()  {
    const ol = document.getElementById('lista-tarefas')
    let textos = (JSON.parse(localStorage.texto))
    let classes = (JSON.parse(localStorage.classes))
    for (let index = 0; index < textos.length; index += 1){
      let li = document.createElement('li')
      li.addEventListener('dblclick', markComplete)
      li.addEventListener('click', mudaClasse)
      li.innerHTML = textos[index]
      li.className = classes[index]
      li.classList.add('item')
      ol.appendChild(li)
    }
}


// let li = document.createElement('li')
// li.addEventListener('click', mudaClasse)
// li.addEventListener('dblclick', markComplete)
// li.className = ('item')
// li.innerHTML = localStorage[index]
// ol.appendChild(li)




pegaTexto()
rmAll()
rmvSel()
save()
if (localStorage.texto !== undefined){
  restore()
  pegaTexto()
  rmAll()
  rmvSel()
  save()
}
