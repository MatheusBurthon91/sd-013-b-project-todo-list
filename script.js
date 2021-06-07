let listAdd = document.querySelector('#criar-tarefa');


function AdicionaLista() {
    const createLine = document.createElement('li');
    // variavel recebe a função de criar lista.
    const listOrd = document.querySelector('#lista-tarefas');
    // variavel recebe o elemente ol.
    const textItem = document.querySelector('#texto-tarefa');
    // variavel recebe o texto escrito no input.
    createLine.innerText = textItem.value;
    // adiciona o texto da variavel 'textItem' na variavel de criação de lista, dessa forma a criação já ocorre com o texto adicionado.
    listOrd.appendChild(createLine);
    // função que cria o filho 'li' dentro do pai 'ol'.
    textItem.value = '';
    // apaga o que está escrito no input.
}    
// função para adicionar lista
listAdd.addEventListener('click', AdicionaLista);
// chamando a função de criação de lista após o CLICK no botão 'adicionar tarefa'.

function changeColor() {
    let linhaCriada = document.getElementsByTagName('li');
    linhaCriada.style.backgroundColor = rgb(128,128,128);
}

linhaCriada.addEventListener('click', changeColor);


// dblclick = dois clicks do mouse

