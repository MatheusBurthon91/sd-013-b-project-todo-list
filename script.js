const botao = document.querySelector('#criar-tarefa');
botao.addEventListener("click", elementos)
function elementos() {
    let li = document.createElement('li');
    let list = document.querySelector('#lista-tarefas');
    let text = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = null;


    li.innerText = text;
    list.appendChild(li);
    li.addEventListener('click', function (event) {

        event.target.style.backgroundColor = 'grey';
        
    }); 
    li.addEventListener('dblclick',function(event){
        event.target.classList.add('completed');
       
        event.target.style.textDecoration = 'line-through solid rgb(0,0,0)';
    })
  
  
}




function selecionarItem(event) {

}



