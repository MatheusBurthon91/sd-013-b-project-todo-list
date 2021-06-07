let list = document.getElementById("lista-tarefas");

let button = document.getElementById("criar-tarefa");

button.addEventListener("click", addTask);

function addTask(){
    let newLi = document.createElement("li");
    let input = document.getElementById("texto-tarefa").value;
    let text = document.createTextNode(input);
    newLi.appendChild(text);
    list.appendChild(newLi);

    newLi.addEventListener("click", changeColor);
    newLi.addEventListener("dblclick", doneUndone);

    document.getElementById("texto-tarefa").value = "";
} 

function changeColor(){

        if(document.querySelectorAll(".grey").length !== 0){
        document.querySelector(".grey").style.backgroundColor = document.body.style.backgroundColor;
        document.querySelector(".grey").classList.remove("grey");    
        event.target.style.backgroundColor = "rgb(128, 128, 128"     
        event.target.classList.add("grey");
        }
            else{
                event.target.style.backgroundColor = "rgb(128, 128, 128"     
                event.target.classList.add("grey");
            }  

} 

function doneUndone(){
    let cont = 0;
    for(let index = 0; index < event.target.classList.length; index += 1){
       if (event.target.classList[index] === "completed"){
            cont += 1;
       }  
    }   

    if(cont === 1){
        event.target.classList.remove("completed");
    }
        else{
            event.target.classList.add("completed");
        }

}


