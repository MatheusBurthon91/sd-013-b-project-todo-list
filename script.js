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

    input.placeholder = 'digite aqui o item.';
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

function criarButao() {
    let butao = document.createElement('button');
    let idDobotao = 'criar-tarefa';
    let resgateinput = document.getElementById('lugar-do-input');
    
    butao.id = idDobotao;
    butao.innerText = 'adionar';
    resgateinput.appendChild(butao);
}
criarButao();

/*No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, 
clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, 
o texto digitado aparece na lista e desaparece do input.*/
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', criarTextoNaLista);

function criarTextoNaLista() {
    let input = document.getElementById('texto-tarefa');
    let elementoDaLista = document.createElement('li');// aqui é uma <li></li> vazia.
    let lista = document.getElementById('lista-tarefas');
    elementoDaLista.innerText = input.value;// é o valor que está dentro do input
    elementoDaLista.addEventListener('click', function(){//adiciona o evento na lista
        let elementoComClasseCinza = document.querySelector('.cinza');
        elementoDaLista.className = 'cinza';
        if(elementoComClasseCinza !== null) {
            elementoComClasseCinza.classList.remove('cinza');
    }
});
    // aqui é uma <li>value</li>
    lista.appendChild(elementoDaLista);
    //<ol id='lista-tarefas'><li>value</li></ol>
    input.value = "";
}







// let itensDaLista = document.querySelector('.selected');
// function clicarNoItem(event) {
//     event.target.classList('selected');
//     clicarNoItem.classList.remove('selected');
// }
// itensDaLista.addEventListener('click', clicarNoItem);
// let lista = document.getElementById('lista-tarefas');
// lista.className = 'selected';
// lista.addEventListener('click', function(event){
// event.target.classList.add('selected');
// });

//let itensDaLista = document.getElementsByTagName('li');
//itensDaLista.addEventListener('click', function())
/*function mudarOBackgroundDoItem() {

}
itemDaLista.style.backgroundColor = 'rgb(128,128,128)';*/

//sempre utilize o typeof pra saber o que ele quer retornar
//ficar de olho no console do site
