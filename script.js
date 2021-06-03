let inpute =document.getElementById("texto-tarefa")

let button = document.getElementById("criar-tarefa")

let list = document.getElementById("lista-tarefas")

let dell = document.getElementById("apaga-tudo")



function clearValue (){
    inpute.value="";
}

function creatAction (){

    let creat = inpute.value
    let li = document.createElement("li")
    li.innerText= creat;
    list.appendChild(li);
    clearValue()

    dell.addEventListener("click",function() {
        list.removeChild(li);
        
})
}

button.addEventListener("click",creatAction);

function  removeclass() {
    let vdd = document.getElementsByClassName("liColor")[0];
    if(vdd) {
        vdd.classList.remove("liColor")
    }
};

list.addEventListener("click",(event) => {
    removeclass();
    event.target.classList.add("liColor")
});

    list.addEventListener("dblclick", (event) =>{
        event.target.classList.toggle("completed")
    });