const list = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa')

// criando a lista
function createList() {
  const text = document.getElementById('texto-tarefa');
  const listOrd = document.createElement('li');

  if (text.value !== ''){
    listOrd.innerText = text.value;
  }
  list.appendChild(listOrd);
  text.value = ''
}

//criando o botão que vai adicionar a list
button.addEventListener('click', createList);
