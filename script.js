function addTask() {
    let valueInput = document.querySelector('#texto-tarefa');
    let valueLi = document.createElement('li');
    valueLi.innerHTML = valueInput.value;
    document.getElementById('lista-tarefas').appendChild(valueLi);
    valueInput.value = '';
}

