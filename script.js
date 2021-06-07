//Cria header com conteúdo "Minha Lista de Tarefas"
let header = document.createElement('header');
let h1 = document.createElement('h1');
let body = document.getElementById('body');
h1.innerText = 'Minha Lista de Tarefas';
body.appendChild(header);
header.appendChild(h1);

//cria uma div para o input e botão
let div1 = document.createElement('div');
div1.id = 'div-um';
body.appendChild(div1);

//Cria um paragrafo abaixo do titulo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
let p1 = document.createElement('p');
p1.id = 'funcionamento';
p1.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(p1);

//Cria um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
var nameInput = document.createElement("input");
nameInput.setAttribute('type', 'type');
nameInput.id = 'texto-tarefa';
div1.appendChild(nameInput);

//Cria uma lista ordenada de tarefas
var oList = document.createElement('ol');
oList.id = 'lista-tarefa';
body.appendChild(oList);

//Cria um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
var nameButton= document.createElement("input");
nameButton.setAttribute('type', 'button');
nameButton.id = 'criar-tarefa';
div1.appendChild(nameButton);