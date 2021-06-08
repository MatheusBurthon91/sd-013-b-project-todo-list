//Cria header com conteúdo "Minha Lista de Tarefas"
let header = document.createElement('header');
let h1 = document.createElement('h1');
let body = document.getElementById('body');
h1.innerText = 'Minha Lista de Tarefas';
body.appendChild(header);
header.appendChild(h1);


//cria uma div para o input e botão
let main = document.createElement('main');
body.appendChild(main);
let div1 = document.createElement('div');
div1.id = 'div-um';
main.appendChild(div1);


//Cria um paragrafo abaixo do titulo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
let p1 = document.createElement('p');
p1.id = 'funcionamento';
p1.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(p1);


//Cria um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
var nameInput = document.createElement("input");
nameInput.id = 'texto-tarefa';
div1.appendChild(nameInput);


//Cria uma lista ordenada de tarefas
var divList = document.createElement('div');
main.appendChild(divList);
var oList = document.createElement('ol');
oList.id = 'lista-tarefas';
divList.appendChild(oList);


//Cria um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
var nameButton= document.createElement('button');
nameButton.id = 'criar-tarefa';
div1.appendChild(nameButton);


//Cria uma função para adicionar o valor do input à lista quando clicar no botão
nameButton.onclick = function (){
  if (nameInput.value === ''){
    alert('Escreva algo');
  }else if (nameInput.value !== '') {
  let catchText = nameInput.value;
  let li = document.createElement('li');
  li.innerText = catchText;
  oList.appendChild(li);
  nameInput.value = '';
  }
}


//Alterar cor de fundo da lista ao clicar

oList.addEventListener ('click', function(event){
  if (event.currentTarget === event.target) {
     return;
  }
  let liLista = document.getElementsByTagName('li');

  // if(event.target.style.backgroundColor === 'rgb(128, 128, 128)'){
  //   event.target.style.backgroundColor = 'rgb(255, 255, 255)';
  //   return;
  // }

  for (index = 0; index < liLista.length; index +=1){
    liLista[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
 
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }, false);


// Clicar duas vezes no item faz com que ele seja riscado
oList.addEventListener ('dblclick', completedTask);

function completedTask(){
  if (event.currentTarget === event.target) {
    return;
 }
  event.target.classList.toggle('completed');
  false;
}
