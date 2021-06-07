const botao = document.querySelector('#criar-tarefa');
botao.addEventListener("click", elementos)
function elementos() {
    let li = document.createElement('li');
    let list = document.querySelector('#lista-tarefas');
    let text = document.querySelector('#texto-tarefa').value;
    document.querySelector('#texto-tarefa').value = null;


    li.innerText = text;
    list.appendChild(li);
    //pintando background

    li.addEventListener('click', function (event) {

      event.target.style.backgroundColor = 'grey';

    });
    //riscando elementos 'li' e adicionando classe completed
    li.addEventListener('dblclick', function (event) {
        event.target.classList.add('completed');

        event.target.style.textDecoration = 'line-through solid rgb(0,0,0)';

        li.addEventListener('dblclick', tirarRisco)
        function tirarRisco(event) {
            event.target.classList.remove('completed');
            event.target.style.textDecoration = 'none';
        }
    })




}




function selecionarItem(event) {

}



