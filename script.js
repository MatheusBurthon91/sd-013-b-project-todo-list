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