let listAdd = document.querySelector('#criar-tarefa');
// variavel recebe ação
const listOrd = document.getElementById('lista-tarefas');
// variavel recebe o elemente ol.
const botaoLimpar = document.getElementById('apaga-tudo');
const botaoLimparConcluido = document.getElementById('remover-finalizados');

function AdicionaLista() {
    const createLine = document.createElement('li');
    // variavel recebe a função de criar lista.
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

function changeColor(event) {
    const Select = document.getElementsByClassName('tarefaSelecionada');
    const targetEvent = event.target;
    if (Select.length === 1) {
        Select[0].classList.remove('tarefaSelecionada')   
    }
    targetEvent.classList.add('tarefaSelecionada')

}
//função para selecionar tarefa e trocar o fundo
listOrd.addEventListener('click', changeColor);

function tarefaCompleta(event) {
    const targetCompleted = event.target;
    
    if (targetCompleted.classList.contains('completed')) {
        targetCompleted.classList.remove('completed');
    } else {
        targetCompleted.classList.add('completed');
    }
}
//função para riscar tarefas completas.
listOrd.addEventListener('dblclick', tarefaCompleta)


function apagarTarefas() {
    listOrd.innerHTML = '';
}
//função para apagar tudo.
botaoLimpar.addEventListener('click', apagarTarefas);

function limparConcluido() {
    let listas = document.getElementsByTagName('li');
    for (let index = listas.length - 1; index >= 0; index -= 1) {
        if (listas[index].classList.contains('completed')) {
            listOrd.removeChild(listas[index]);
        }           
    }    
}
botaoLimparConcluido.addEventListener('click', limparConcluido);
