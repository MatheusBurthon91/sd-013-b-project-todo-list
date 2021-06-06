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

const olTodoList = document.createElement('ol');
olTodoList.id = 'lista-tarefas';
body.appendChild(olTodoList);

// ------------------- FUNÇÕES -------------------
taskBtn.addEventListener('click', () => {
  let taskItem = inputToDoText.value;

  if (!(taskItem === '')) {
    const liTag = document.createElement('li');
    liTag.innerText = taskItem;
  
    olTodoList.appendChild(liTag);
    inputToDoText.value = '';
  }
});



// ------------------- CHAMADA DAS FUNÇÕES -------------------

olTodoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('selected-item')) {
    event.target.classList.remove('selected-item')
  } else {
    event.target.classList.add('selected-item');
  }
});