const body = document.querySelector('body');
const headerTag = document.createElement('header');
headerTag.innerText = 'Minha Lista de Tarefas';
body.appendChild(headerTag);

const pTagWorking = document.createElement('p');
pTagWorking.id = 'funcionamento';
pTagWorking.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(pTagWorking);
