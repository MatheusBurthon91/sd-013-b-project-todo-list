// ------------------- VARIAVEIS -------------------
const body = document.querySelector('body');
const headerTag = document.createElement('header');
headerTag.innerText = 'Minha Lista de Tarefas';
body.appendChild(headerTag);

const pTagWorking = document.createElement('p');
pTagWorking.id = 'funcionamento';
pTagWorking.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
body.appendChild(pTagWorking);

const inputToDoText = document.createElement('input');
inputToDoText.id = 'texto-tarefa';
inputToDoText.placeholder = 'Digite aqui a sua tarefa';
body.appendChild(inputToDoText);

const taskBtn = document.createElement('button');
taskBtn.innerText = 'Criar tarefa';
taskBtn.id = 'criar-tarefa';
body.appendChild(taskBtn);

const eraseAllBtn = document.createElement('button');
eraseAllBtn.id = 'apaga-tudo';
eraseAllBtn.innerHTML = 'Apagar <strong>todas</strong> tarefas';
body.appendChild(eraseAllBtn);

const olTodoList = document.createElement('ol');
olTodoList.id = 'lista-tarefas';
body.appendChild(olTodoList);


// ------------------- FUNÇÕES -------------------
taskBtn.addEventListener('click', () => {
  const taskItem = inputToDoText.value;

  if (taskItem !== '') {
    const liTag = document.createElement('li');
    liTag.innerText = taskItem;

    olTodoList.appendChild(liTag);
    inputToDoText.value = '';
  }
});

olTodoList.addEventListener('click', (event) => {
  const selectedItemClass = document.querySelector('.selected-item');
  const liTarget = event.target;

  if (selectedItemClass === null) {
    liTarget.classList.add('selected-item');
  } else {
    selectedItemClass.classList.remove('selected-item');
    liTarget.classList.add('selected-item');
  }
});

olTodoList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Procurei na internet em como remover filhos sem for
// https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element
eraseAllBtn.addEventListener('click', () => {
  while (olTodoList.lastChild) {
    olTodoList.removeChild(olTodoList.lastChild);
  }
});

// ------------------- CHAMADA DAS FUNÇÕES -------------------


/*
button com o id apaga-tudo
Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia
*/