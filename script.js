function addTask() {
    let valueInput = document.querySelector('#texto-tarefa');
    let valueLi = document.createElement('li');
    valueLi.innerHTML = valueInput.value;
    valueLi.classList.add('tarefas')
    document.getElementById('lista-tarefas').appendChild(valueLi);
    valueInput.value = '';
}

let olGrey = document.querySelector('#lista-tarefas');
let liGrey = document.getElementsByTagName('li');
olGrey.addEventListener('click', (event) => {
    if (event.target.classList.contains('tarefas')) {
        for (let index = 0; index < liGrey.length; index += 1) {
            if (liGrey[index].classList.contains('grey')) {
                    liGrey[index].classList.remove('grey')
            } else {
                event.target.classList.add('grey')
            }
        }
    }
});

olGrey.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('tarefas')) {
        
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed')
        } else {
            event.target.classList.add('completed');
        }
    }
    
}); 

function removeTask() {
    let ol = document.querySelector('#lista-tarefas')
    while (ol.hasChildNodes()) { // verifica se tem algum nó filho.
        ol.removeChild(ol.firstChild); // remove o primeiro filho da ol(no caso seria as li's)
    }
}

function finishRemove() {
    const finish = document.querySelectorAll('.completed')
    let ol = document.querySelector('#lista-tarefas')
    for(let index = 0; index < finish.length; index+= 1) {
        if (finish[index].classList.contains('completed')) {
            ol.removeChild(finish[index]);
        }
    }
}
let buttonFinish = document.getElementById('remover-finalizados')
buttonFinish.addEventListener('click', finishRemove());