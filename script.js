window.onload = function(){
}

function addItem(){ 
    const listaPai = document.getElementById("lista-tarefas");
    let input = document.getElementById('texto-tarefa').value;
    let novoItem = document.createElement('li');
    novoItem.innerHTML = input;
    listaPai.appendChild(novoItem);
    document.querySelector('input').value = '';
}

let button = document.querySelector("button");
button.addEventListener("click", addItem);
