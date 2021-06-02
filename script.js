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