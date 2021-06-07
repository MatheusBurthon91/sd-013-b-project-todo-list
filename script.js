//HTML
let h1 = document.createElement('h1');
h1.innerHTML = 'Minha Lista de Tarefas';

let paragraph = document.createElement('p')
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

let header = document.createElement('header');
header.appendChild(h1);
header.appendChild(paragraph);

let button = document.createElement('button');
button.id = 'criar-tarefa'
button.innerHTML = 'Adicionar Tarefa'

let input = document.createElement('input');
input.id = 'texto-tarefa';

let list = document.createElement('ol');
list.id = 'lista-tarefas';

let body = document.getElementsByTagName('body')[0];
body.appendChild(header);
body.appendChild(input);
body.appendChild(list);
body.appendChild(button);

//Clicar no botão = Adicionar Texto do Input e limar Input

function addTask() {
    button.addEventListener('click', function() {
        let li = document.createElement('li');
        li.innerText = input.value;
        list.appendChild(li);
        input.value = '';
    })
}
addTask()

function clearInput() {

}