function addingListInfo() {
  
}

addingListInfo();

document.getElementById('criar-tarefa').addEventListener('click', function (){
  const inpuText = document.getElementById('texto-tarefa').value;
  const createLi = document.createElement('li');
  const getOl = document.getElementById('lista-tarefas');
  createLi.innerText = inpuText;
  getOl.appendChild(createLi);
  document.getElementById('texto-tarefa').value = '';
});