const input = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa')


function mudarBG (li) {
  li.addEventListener('click', (event) => {
    const rowSelected = event.target;
    const rowSelectedPrevious = document.querySelector('.selected');
    console.log(rowSelectedPrevious);
    rowSelectedPrevious.style.backgroundColor = 'white';
    rowSelectedPrevious.classList.remove('selected');
    rowSelected.classList.add('selected');
    const linhaSelect = document.querySelector('.selected');
    if (linhaSelect.style.backgroundColor === 'rgb(128, 128, 128)'){
      linhaSelect.style.backgroundColor = 'white'; 
    }else {
      linhaSelect.style.backgroundColor = 'rgb(128, 128, 128)';
    } 
  })
}

criarTarefa.addEventListener('click', () => {
  const listaTarefa = document.createElement('li');
  listaOrdenada.appendChild(listaTarefa);
  listaTarefa.innerHTML = input.value;
  mudarBG(listaTarefa);
  input.value = '';
  const linhaselect = document.getElementsByTagName('li')[0];
  linhaselect.classList.add('selected');
});

