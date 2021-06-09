// Nesse Requisito eu tive ajuda do Lopes e do Pedro!
function selected(event){
    // const allLi = document.getElementsByClassName('selected')[0];
    const allLi = document.querySelector('.selected');
    if (allLi) {
        allLi.classList.remove('selected');
    }
        event.target.classList.add('selected');
}

const button = document.querySelector('#criar-tarefa');
function adicionar() {
    const text = document.getElementById('texto-tarefa').value;
    const list = document.getElementById('lista-tarefas');
    const newEl = document.createElement('li');
    newEl.addEventListener('click', selected);
    document.querySelector('#texto-tarefa').value = null;
    newEl.innerText = text;
    list.appendChild(newEl);
}
button.addEventListener('click', adicionar);
