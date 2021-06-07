let texto = '';
let temp = ''
let lista = document.querySelector('#lista-tarefas');

function capturar(){
texto = document.getElementById('texto-tarefa').value;
temp = texto;


novoItem = document.createElement('li');
novoItem.innerHTML = temp;
lista.appendChild(novoItem);
document.getElementById('texto-tarefa').value = '';
}

function limpaCinza(){
    item = lista.children;
    console.log(item[0]);
    for (index = 0; index < item.length; index += 1){
        item[index].style.background = 'rgb(255,255,255)';
    }
}

function paint(event){
    limpaCinza();
    let x = event.target;
    console.log(x);
    x.style.background = 'rgb(128,128,128)';
}

function risca(event){
    
    let x = event.target;

    if (x.style.textDecoration == ''){
        x.classList.add("completed");
    } else {
        x.classList.remove("completed");
    }
}

function apagaTudo(event){
    lista.innerHTML = '';
}




