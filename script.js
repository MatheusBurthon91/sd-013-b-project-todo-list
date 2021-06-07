
function newItem() {
  let task = document.getElementById("texto-tarefa");
  let tasklist = document.getElementById("lista-tarefas");
  let newTask = document.createElement("li");

  newTask.innerText = task.value;
  tasklist.appendChild(newTask);
  task.value = "";
}

/* let tasklist = document.getElementById("lista-tarefas");
let tarefa1 = document.createElement("li");
tarefa1.innerText = "Concluir o projeto 2";
tasklist.appendChild(tarefa1); */