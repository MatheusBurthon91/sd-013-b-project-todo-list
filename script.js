let inpute =document.getElementById("texto-tarefa")

let button = document.getElementById("criar-tarefa")

let list = document.getElementById("lista-tarefas")

function clearValue (){
    inpute.value ="";
}

function creatAction (){

    let creat = inpute.value
    let li = document.createElement("li")
    li.innerText= creat;
    list.appendChild(li);
    clearValue()
}



button.addEventListener("click",creatAction)


