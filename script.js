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

const saveTaksBtn = document.createElement('button');
saveTaksBtn.id = 'salvar-tarefas';
saveTaksBtn.innerText = 'Salvar tarefas';
body.appendChild(saveTaksBtn);

const removeCompletedBtn = document.createElement('button');
removeCompletedBtn.innerText = 'Remover finalizados';
removeCompletedBtn.id = 'remover-finalizados';
body.appendChild(removeCompletedBtn);

const eraseAllBtn = document.createElement('button');
eraseAllBtn.id = 'apaga-tudo';
eraseAllBtn.innerHTML = 'Apagar <strong>todas</strong> tarefas';
body.appendChild(eraseAllBtn);

const olTodoList = document.createElement('ol');
olTodoList.id = 'lista-tarefas';
body.appendChild(olTodoList);

// ------------------- FUNÇÕES -------------------
// Cria tarefa ao clicar no botao
taskBtn.addEventListener('click', () => {
  const taskItem = inputToDoText.value;

  if (taskItem !== '') {
    const liTag = document.createElement('li');
    liTag.innerText = taskItem;

    olTodoList.appendChild(liTag);
    inputToDoText.value = '';
  }
});

// Add 'selected-item'no item selecionado
olTodoList.addEventListener('click', (event) => {
  const selectItem = '.selected-item';
  const selectedItemClass = document.querySelector(selectItem);

  if (selectedItemClass === null) {
    event.target.classList.add(selectItem);
  } else {
    selectedItemClass.classList.remove('selected-item');
    event.target.classList.add(selectItem);
  }
});

// Add 'completed' no item selecionado
olTodoList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Procurei na internet em como remover filhos sem for
// https://attacomsian.com/blog/javascript-dom-remove-all-children-of-an-element
// deletar todas as tarefas
eraseAllBtn.addEventListener('click', () => {
  while (olTodoList.lastChild) {
    olTodoList.removeChild(olTodoList.lastChild);
  }
});

// Remove item com a classe 'completed'
removeCompletedBtn.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTasks.length; index += 1) {
    completedTasks[index].remove();
  }
});

// Cria localstorage com os itens da lista
saveTaksBtn.addEventListener('click', () => {
  const itemSelected = document.querySelectorAll('#lista-tarefas li');
  const arrayItens = [];

  for (let index = 0; index < itemSelected.length; index += 1) {
    arrayItens.push({
      classes: itemSelected[index].className,
      innerText: itemSelected[index].innerText,
    });
  }
  localStorage.setItem('tasks', JSON.stringify(arrayItens));
});

// Recebe o localStorage de monta a lista
function loadStorage() {
  const arrayLS = JSON.parse(localStorage.getItem('tasks'));
  for (let index = 0; index < arrayLS.length; index += 1) {
    const liItem = document.createElement('li');

    liItem.className = (arrayLS[index]['classes']);
    liItem.innerText = (arrayLS[index]['innerText']);
    olTodoList.appendChild(liItem);
  }
}



// ------------------- CHAMADA DAS FUNÇÕES -------------------
loadStorage();
