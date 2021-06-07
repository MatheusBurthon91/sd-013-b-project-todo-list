let list = document.getElementById("lista-tarefas");

let button = document.getElementById("criar-tarefa");

button.addEventListener("click", addTask);

function addTask(){
    let newLi = document.createElement("li");
    let input = document.getElementById("texto-tarefa").value;
    let text = document.createTextNode(input);
    newLi.appendChild(text);
    list.appendChild(newLi);
    document.getElementById("texto-tarefa").value = "";

    console.log(input); //Pq é preciso usar o createTextNode 
}                       //para conseguir fazer o appendChild?
                        //Tendo em vista que o input já é um
                        //texto como pode ser visto no console.log.
