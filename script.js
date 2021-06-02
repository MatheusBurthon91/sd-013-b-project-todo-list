//5
function addTask() {
    let content = document.getElementById('texto-tarefa').innerText;
    let task = document.createElement('li');
    let taskList = document.getElementById('lista-tarefas');
    task.innerText = content;
    taskList.appendChild(task);
}
let addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addTask);