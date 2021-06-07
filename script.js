let texto = '';
let lista = document.querySelector('#lista-tarefas');
let itemSelecionado = null;

function capturar(){
    texto = document.getElementById('texto-tarefa').value;
    novoItem = document.createElement('li');
    novoItem.innerHTML = texto;
    lista.appendChild(novoItem);
    document.getElementById('texto-tarefa').value = '';
}

function limpaCinza(){
    item = lista.children;
    for (index = 0; index < item.length; index += 1){
        item[index].style.background = 'rgb(255,255,255)';
    }
}

function paint(event){
    limpaCinza();
    let x = event.target;
    console.log(x);
    x.style.background = 'rgb(128,128,128)';
    itemSelecionado = x;
}

function risca(event){
    
    let x = event.target;

    if (x.className == ''){
        x.classList.add("completed");
    } else {
        x.classList.remove("completed");
    }
}

function apagaTudo(event){
    lista.innerHTML = '';
}

function apagaSelecionado(event){
    lista.removeChild(itemSelecionado);
}

function apagaFinalizado(event){
    item = lista.children;
    console.log(item);
    for (index = 0; index < item.length; index += 1){
        if(item[index].className == 'completed'){
            lista.removeChild(item[index]);
            index = index - 1;
            
        }    
    }
    
}



