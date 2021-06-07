
//Salva as tarefas na lista ordenada e limpa o imput//
function tarefas() {
    let input = document.getElementById("texto-tarefa").value;
    let lista = document.getElementById("lista-tarefas");
    let botao = document.getElementById("criar-tarefa");
    let itemLista = document.createElement("li");
    lista.appendChild(itemLista);
    itemLista.innerText = input;
    itemLista.addEventListener("click", addCinza);
    document.getElementById("texto-tarefa").value = '';
    
    }

function addCinza (event) {
    let listacomp = document.querySelectorAll("li");
    for (let index = 0; index < listacomp.length; index+= 1) {
        listacomp[index].classList.remove("cinza");  
    } 
    event.target.classList.add("cinza");     
}

/*function RemoveCinza (event) {
    let la = event.target;
    la.classList.add("cinza");  
}*/

