const button = document.querySelector('#criar-tarefa');
function adicionar() {
    const text = document.getElementById('texto-tarefa').value;
    const list = document.getElementById('lista-tarefas');
    const newEl = document.createElement('li');
    document.querySelector('#texto-tarefa').value = null;
    newEl.innerText = text;
    list.appendChild(newEl);
}
button.addEventListener('click', adicionar);
