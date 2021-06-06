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

const olTodoList = document.createElement('ol');
olTodoList.id = 'lista-tarefas';
body.appendChild(olTodoList);

const taskBtn = document.createElement('button');
taskBtn.innerText = 'Criar tarefa';
taskBtn.id = 'criar-tarefa';
body.appendChild(taskBtn);

taskBtn.addEventListener('click', () => {
  let taskItem = inputToDoText.value;

  const liTag = document.createElement('li');
  liTag.innerText = taskItem;

  olTodoList.appendChild(liTag);
  inputToDoText.value = '';
});