//Salva as tarefas na lista ordenada e limpa o imput//
function tarefas() {
    let input = document.getElementById("texto-tarefa").value;
    let lista = document.getElementById("lista-tarefas");
    let botao = document.getElementById("criar-tarefa");
    let itemLista = document.createElement("li");
    lista.appendChild(itemLista);
    itemLista.innerText = input;
    document.getElementById("texto-tarefa").value = '';
    
    }