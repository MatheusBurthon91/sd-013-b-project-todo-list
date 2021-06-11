const input = document.getElementById('texto-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa')


function mudarBG (li) {
  li.addEventListener('click', (event) => {
    const rowSelected = event.target;
    const rowSelectedPrevious = document.querySelector('.selected');
    console.log(rowSelectedPrevious);
    rowSelectedPrevious.classList.remove('selected');
    rowSelected.classList.add('selected');
    const linhaSelect = document.querySelector('.selected');
    if (rowSelected !== rowSelectedPrevious){
      rowSelectedPrevious.style.backgroundColor = 'white';
    }
    if (linhaSelect.style.backgroundColor === 'rgb(128, 128, 128)'){
      linhaSelect.style.backgroundColor = 'white';
    }else {
      linhaSelect.style.backgroundColor = 'rgb(128, 128, 128)';
    } 
  });
}

function mudarCompleted (la) {
  la.addEventListener('dblclick', (event) => {
    const changeComplete = event.target;
    if (changeComplete.className === 'completed'){
      event.target.classList.remove('completed');
    }else {
      event.target.classList.add('completed');
    }     
  });
}

criarTarefa.addEventListener('click', () => {
  const listaTarefa = document.createElement('li');
  listaOrdenada.appendChild(listaTarefa);
  listaTarefa.innerHTML = input.value;
  mudarBG(listaTarefa);
  input.value = '';
  const linhaselect = document.getElementsByTagName('li')[0];
  linhaselect.classList.add('selected');
  mudarCompleted(listaTarefa);
});

