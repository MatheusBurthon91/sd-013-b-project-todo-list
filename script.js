//sessionStorage.setItem('li-s', 0);

// Criando o botão ADD
const btnAdd = document.createElement('button');
btnAdd.innerText = 'Adicionar';
btnAdd.id = 'criar-tarefa';
document.getElementById('inputs').appendChild(btnAdd);

// Funcionalidade do btnAdd
btnAdd.addEventListener('click', addAssignment);

function addAssignment() {
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  item.className ='itens';
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('texto-tarefa').value = '';
  //sessionStorage.setItem('li-s', document.querySelectorAll('.itens').length);
}

const itens = document.querySelectorAll('.itens');

for (const index = 0; index < itens[index]; index += 1) {
  itens[index].addEventListener('click', function() {
    itens[index].style.backgroundColor = 'red';
  });
}





