// Nesse Requisito eu tive ajuda do Lopes e do Pedro!
function selected(event){
    // const allLi = document.getElementsByClassName('selected')[0];
    const allLi = document.querySelector('.selected');
    if (allLi) {
        allLi.classList.remove('selected');
    }
        event.target.classList.add('selected');
}

function completed(event){
    // const allLi = document.querySelectorAll('.completed');
    // event.target.classList.add('completed');
    // console.log(allLi);
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
} 

const button = document.querySelector('#criar-tarefa');
function adicionar() {
    const text = document.getElementById('texto-tarefa').value;
    const list = document.getElementById('lista-tarefas');
    const newEl = document.createElement('li');
    newEl.addEventListener('click', selected);
    newEl.addEventListener('dblclick', completed);
    document.querySelector('#texto-tarefa').value = null;
    newEl.innerText = text;
    list.appendChild(newEl);
}
button.addEventListener('click', adicionar);
