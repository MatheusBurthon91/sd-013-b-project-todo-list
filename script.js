const botaoAdi = document.querySelector('#criar-tarefa');
const textTarefa = document.querySelector('#texto-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');

function adicionarTarefa() {
  let input = textTarefa.value;
  let li = document.createElement('li');
  li.innerText = input;
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
