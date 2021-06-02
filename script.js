window.onload = function(){
}



function addItem(){ 
    const listaPai = document.getElementById("lista-tarefas");
    let input = document.getElementById('texto-tarefa').value;
    let novoItem = document.createElement('li');
    novoItem.innerHTML = input;
    listaPai.appendChild(novoItem);
    input.reset();
}

let button = document.querySelector("button");
button.addEventListener("dblclick", addItem);

