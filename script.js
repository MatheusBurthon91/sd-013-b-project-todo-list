let input = document.querySelector('#texto-tarefa');
let btn = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let removeBtn = document.querySelector('#apaga-tudo');
let removeCompleteBtn = document.querySelector('#remover-finalizados');

// cliclou no botao

btn.addEventListener('click', adciona);
removeBtn.addEventListener('click',apaga);
removeCompleteBtn.addEventListener('click',apagaCompletos);


function adciona(){
    let li = document.createElement('li');
    console.log(input.value)
    li.innerText = input.value;
    lista.appendChild(li);
    colore();
    risca();
}
function colore(){
    let cont = 0;
    let itens = document.querySelectorAll('li');
    for(let index = 0; index < itens.length ; index+= 1){
        let selected = itens[index];
        selected.addEventListener('click',()=>{
        
        for(let index = 0 ; index < itens.length ; index+=1){
            let indi = itens[index] ; 
                if(indi.classList.contains('cinza')){
                    indi.classList.remove('cinza');

                }
        }
            selected.classList.add('cinza');
    });
    }
}

function risca(){
    let itens = document.querySelectorAll('li')
    for(let index = 0 ; index < itens.length ; index+=1){
        let complete = itens[index];
        complete.addEventListener('dblclick',()=>{
            for(let index = 0 ; index < itens.length ; index+=1){
                if(complete.classList.contains('completed')){
                    complete.classList.remove('completed')
                }else{
                    complete.classList.add('completed');

                }
            }
            
            
            

        });
    }
}


// clicou na lista 

let itens = document.querySelectorAll('li');
for(let index = 0 ; index < itens.length ; index+=1){
    let item = itens[index];
    item.addEventListener('click',()=>{
        item.classList.add('select');

    })
}

function apaga(){
    
    let paiLista = document.querySelector('ol');
    let lista = document.querySelectorAll('li');
    for(let index = 0 ; index < lista.length ; index+=1){
        let item = lista[index];
        paiLista.removeChild(item);
        
    }
  

}

function apagaCompletos(){
    let lista = document.querySelectorAll('li');
    let paiLista = document.querySelector('ol');
    for(let index = 0;index<lista.length;index+=1){
        let item = lista[index];
        if(item.classList.contains('completed')){
            paiLista.removeChild(item);
        }
    }

}