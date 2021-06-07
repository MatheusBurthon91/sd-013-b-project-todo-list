let h1 = document.createElement('h1');
h1.innerHTML = 'Minha Lista de Tarefas';

let paragraph = document.createElement('p')
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

let header = document.createElement('header');
header.appendChild(h1);
header.appendChild(paragraph);

let input = document.createElement('input')
input.id = 'texto-tarefa';

let list = document.createElement('ol');
list.id = 'lista-tarefas';

let body = document.getElementsByTagName('body')[0];
body.appendChild(header);
body.appendChild(input);
body.appendChild(list)