let h1 = document.createElement('h1');
h1.innerHTML = 'Minha Lista de Tarefas'

let header = document.createElement('header');
header.appendChild(h1);

let body = document.getElementsByTagName('body')[0];
body.appendChild(header)
