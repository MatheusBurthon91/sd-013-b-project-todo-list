const botaoAdi = document.querySelector('#criar-tarefa');
const textTarefa = document.querySelector('#texto-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoFinalizados=document.querySelector('#remover-finalizados');
const botaoAddTarefas=document.querySelector('#salvar-tarefas');

function adicionarTarefa() {
  let input = textTarefa.value;
  let li = document.createElement('li');
  li.innerText = input;
  li.id='li';
  textTarefa.value = '';
  listaTarefa.appendChild(li);
}

botaoAdi.addEventListener('click', adicionarTarefa);

listaTarefa.addEventListener('click', (event) => {
  removendoClasse();

  event.target.classList.add('selected');
});
//Source=Requisito 8 inspirado na resolução do Ygor Lages link:https://github.com/tryber/sd-013-b-project-todo-list/tree/ygor-project-todo-list

function removendoClasse(evento) {
  //seleciona o elemento com a classe selected na posição 0;
  let li = document.getElementsByClassName('selected')[0];
  //se caso ele achar um li na posição 0 ele vai exclui-lo;
  if (li) {
    li.classList.remove('selected');
  }
}

listaTarefa.addEventListener('dblclick', (doubleclick) => {
  doubleclick.target.classList.toggle('completed');
});

botaoApaga.addEventListener('click', () => {
  const apagaSelecionado=document.querySelectorAll('li');
  for(let index=0;index<apagaSelecionado.length;index+=1){
    apagaSelecionado[index].remove();
  }
});
botaoFinalizados.addEventListener('click', () => {
  const apagaFinalizado=document.querySelectorAll('.completed');
  for(let index=0;index<apagaFinalizado.length;index+=1){
    apagaFinalizado[index].remove();
  }
});

botaoAddTarefas.addEventListener('click',()=>{
  let completed=document.querySelectorAll('.completed');
    
  localStorage.setItem('li',completed)



})