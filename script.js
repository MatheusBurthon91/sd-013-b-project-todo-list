//sessionStorage.setItem('li-s', 0);
const cont = 0;
// Criando o botão ADD
const btnAdd = document.createElement('button');
btnAdd.innerText = 'Adicionar';
btnAdd.id = 'criar-tarefa';
document.getElementById('inputs').appendChild(btnAdd);

// Funcionalidade do btnAdd
btnAdd.addEventListener('click', addAssignment);

function addAssignment() {
  // cria a 'li'
  const item = document.createElement('li');
  item.innerText = document.getElementById('texto-tarefa').value;
  item.className ='itens';
  document.getElementById('lista-tarefas').appendChild(item);
  document.getElementById('texto-tarefa').value = '';

  const itens = document.querySelectorAll('.itens'); // pega todos os 'li'
  itens[itens.length - 1].addEventListener('click', function() { // add o evento click 

  deletColor(itens);
  
  itens[itens.length - 1].classList.add('selected');// Evento click
  });
}

function deletColor (itens) {
  for (const index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
    return itens;
  }
}
  