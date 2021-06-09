function criarParagrafo() {
    let corpo = document.querySelector('#corpo');
    let paragrafo = document.createElement('p');
    let id = 'funcionamento';

    paragrafo.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    paragrafo.id = id;
    corpo.appendChild(paragrafo);
}
criarParagrafo();