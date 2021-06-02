function adicionaInput() {
  const pai = document.getElementById('inputArea')
  const input = document.createElement('input')
  input.id = "texto-tarefa"
  input.className = "campo"
  pai.appendChild(input)


}

adicionaInput();


function criaLista() {
  const pai = document.getElementById('listArea')
  const lista = document.createElement('ol')
  lista.id = "lista-tarefas"
  pai.appendChild(lista)
}
criaLista();


function adicionaBotao() {
  const pai = document.getElementById('inputArea')
  const btn = document.createElement('button')
  btn.id = "criar-tarefa"
  btn.addEventListener('click', adicionaTarefa)
  btn.textContent = "Adicionar"
  btn.className = "btnAdicionar"
  pai.appendChild(btn)
}

adicionaBotao();


function adicionaTarefa() {
  const lista = document.getElementById('lista-tarefas')
  const item = document.createElement('li')
  item.textContent = confereCampo()
  item.className = "item"
  item.addEventListener('click', alteraFundo)
  item.addEventListener('dblclick', riscaConteudo)
  lista.appendChild(item)
  
  
}


function confereCampo() {
  const campo = document.getElementById('texto-tarefa')
  let temp = campo.value
  if(campo.value){
    campo.value = ""
    return temp
  }

}

function alteraFundo(value) {
  removeFundo()
  value.target.classList.add('bg')

}

function removeFundo() {
  const atual = document.getElementsByClassName('bg')[0]
  if(atual){
    atual.classList.remove('bg')
  }



}

function riscaConteudo(value) {
  const alvo = value.target
  if(verificaCompleted(alvo.classList)){
    alvo.classList.remove('completed')
  } else {
    alvo.classList.add('completed')
  }
}


function verificaCompleted(alvo) {
  let lista = alvo
  for(let i = 0; i < lista.length; i += 1){
    if(lista[i] === 'completed'){
      return true
    }
  }
  return false

}



function adicionaLimpar(){
  const pai = document.getElementById('btnsArea')
  let btn = document.createElement('button')
  btn.id = "apaga-tudo",
  btn.className = "btnAdicionar"
  btn.textContent = "Limpar"
  btn.addEventListener('click', limpaTudo)
  pai.appendChild(btn)
  




}

adicionaLimpar()

function limpaTudo() {
  const pai = document.getElementById('lista-tarefas')
  const filhos = document.getElementsByClassName('item')
  let quant = filhos.length
  for(let i = quant -1; i >= 0; i -= 1){
    pai.removeChild(filhos[i])
  }
  
  
}


function adicionaRemover() {
  const pai = document.getElementById('btnsArea')
  const btn = document.createElement('button')
  btn.className = "btnAdicionar"
  btn.textContent = "Limpar Completos"
  btn.id = "remover-finalizados"
  btn.addEventListener('click', removeFinalizados)
  pai.appendChild(btn)
}

adicionaRemover()

function removeFinalizados() {
  const pai = document.getElementById('lista-tarefas')
  const filhos = document.getElementsByClassName('completed')
  let quant = filhos.length;
  for(let i = quant - 1; i >= 0; i -= 1){
    pai.removeChild(filhos[i])
  }

}



function adicionaSalvar() {
  const pai = document.getElementById('btnsArea');
  const btn = document.createElement('button');
  btn.className = "btnAdicionar"
  btn.textContent = "Salvar"
  btn.id = "salvar-tarefas"
  btn.addEventListener('click', salvaTarefas)
  pai.appendChild(btn)
}

adicionaSalvar()



function salvaTarefas(){
  const itens = document.getElementsByClassName('item')
  let lista = transformaArray(itens)
  let classes = getClasses(itens)
  salvaLocal(lista, classes)
}


function transformaArray(save) {
  let itens = save
  let arr = []
  for(let i = 0; i < itens.length; i += 1){
    arr.push(itens[i].textContent)
  }
  return JSON.stringify(arr)
}

function salvaLocal(tarefas, classes) {
  localStorage.clear();
  localStorage.setItem("tarefas", tarefas)
  localStorage.setItem("classes", classes)
  

}

function getClasses(itens) {
  let arr = []

  for(let i = 0; i < itens.length; i += 1){
    arr.push(itens[i].className)
  }

  return transformaClasses(arr)


}


function transformaClasses(arr){
  return JSON.stringify(arr)

}


function verificaSalvos() {
  const tarefas = localStorage.getItem('tarefas')
  const classes = localStorage.getItem('classes')

  if(tarefas && classes){
    adicionaSalvos(tarefas, classes)

  }
}

verificaSalvos();


function adicionaSalvos(tarefa, classe) {
  let tarefas = JSON.parse(tarefa)
  let classes = JSON.parse(classe)
  const pai = document.getElementById('lista-tarefas')
  for(let i = 0; i < tarefas.length; i += 1) {
    const filho = document.createElement('li')
    filho.addEventListener('click', alteraFundo)
    filho.addEventListener('dblclick', riscaConteudo)
    filho.className = classes[i]
    filho.textContent = tarefas[i]
    pai.appendChild(filho)

  }

}



