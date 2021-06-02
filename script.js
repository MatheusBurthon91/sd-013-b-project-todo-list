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



function adicionaMover(){
  const pai = document.getElementById('btnsArea')
  const subir = document.createElement('button')
  const descer = document.createElement('button')

  subir.id = "mover-cima"
  descer.id = "mover-baixo"

  subir.className = "btnAdicionar"
  descer.className = "btnAdicionar"

  subir.textContent = "Subir"
  descer.textContent = "Descer"

  subir.addEventListener('click', sobeItem)
  descer.addEventListener('click', desceItem)

  pai.appendChild(subir)
  pai.appendChild(descer)





}


adicionaMover();


//13
function sobeItem() {
  const selecionado = document.getElementsByClassName('bg')[0]
  let lugar = posicao(selecionado);
  sobe(lugar)
}

function desceItem() {
  const selecionado = document.getElementsByClassName('bg')[0]
  let lugar = posicao(selecionado);
  desce(lugar)
}


function posicao(selecionado) {
  const selected = selecionado
  const filhos = document.getElementsByClassName('item')
  for(let i = 0; i < filhos.length; i += 1){
    if(selected === filhos[i]){
      return i
    }
  }
  
}

function sobe(pos) {
  if(pos === 0){
    return
  }
  let temp;
  let filhos = document.getElementsByClassName('item')
  let novo = transforma(filhos)
  temp = novo[pos - 1]
  novo[pos - 1] = novo[pos]
  novo[pos] = temp
  refaz(novo)
}

function transforma(objeto) {
  let arr = []
  for(let i = 0; i < objeto.length; i += 1){
    arr.push(objeto[i])
  }
  return arr
}


function refaz(novo) {
  limpaTudo()
  const pai = document.getElementById('lista-tarefas')
  for(let i = 0; i < novo.length; i += 1){
    pai.appendChild(novo[i])
  }
}


function desce(pos) {
  let filhos = document.getElementsByClassName('item')
  if(pos === filhos.length - 1) {
    return
  }

  let temp;
  let novo = transforma(filhos)

  temp = novo[pos + 1]
  novo[pos + 1] = novo[pos]
  novo[pos] = temp

  refaz(novo)


}
// acaba 13

function adicionaRemoverSelecionado(){
  const pai = document.getElementById("btnsArea")
  let filho = document.createElement('button')
  filho.id = "remover-selecionado"
  filho.className = "btnAdicionar"
  filho.textContent = "Remover Selecionado"
  filho.addEventListener('click', removeSelecionado)
  pai.appendChild(filho)

}


adicionaRemoverSelecionado()



function removeSelecionado() {
  const selecionado = document.getElementsByClassName('bg')[0]
  const pai = document.getElementById('lista-tarefas')
  if(selecionado){
    pai.removeChild(selecionado)

  }
  

}