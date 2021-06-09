function criarParagrafo() {
    let corpo = document.querySelector('#corpo');
    let paragrafo = document.createElement('p');
    let id = 'funcionamento';

    paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    paragrafo.id = id;
    corpo.appendChild(paragrafo);
}
criarParagrafo();

function criarInput() {
    let lugarDoInput = document.getElementById('lugar-do-input');
    let input = document.createElement('input');
    let idDoInput = 'texto-tarefa';

    input.innerText = 'digite aqui o item.'
    input.id = idDoInput;
    lugarDoInput.appendChild(input);
}
criarInput();

function criarLista() {
    let pegarLista = document.getElementById('lista');
    let listaOrdenada = document.createElement('ol');
    let idDaListaDeTarefas = 'lista-tarefas';

    listaOrdenada.id = idDaListaDeTarefas;
    pegarLista.appendChild(listaOrdenada);
}
criarLista();