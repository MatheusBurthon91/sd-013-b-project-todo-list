const buttonText = document.getElementById('criar-tarefa');

function clickList() {
    const mainList = document.getElementById('lista-tarefas');
    const text = document.getElementById('texto-tarefa');
    const list = document.createElement('li');
    console.log(text.value)
    list.innerText = text.value;
    mainList.appendChild(list)
    text.value = '';
}

buttonText.addEventListener('click', clickList);