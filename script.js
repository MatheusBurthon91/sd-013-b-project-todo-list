const botaoAdi = document.querySelector('#criar-tarefa');
const textTarefa = document.querySelector('#texto-tarefa');
const listaTarefa = document.querySelector('#lista-tarefas');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoFinalizados = document.querySelector('#remover-finalizados');
const botaoAddTarefas = document.querySelector('#salvar-tarefas');
const botaoCima = document.querySelector('#mover-cima');
const botaoBaixo = document.querySelector('#mover-baixo');
const botaoApagaSelecionado = document.querySelector('#remover-selecionado');

function adicionarTarefa() {
  const input = textTarefa.value;
  const li = document.createElement('li');
  li.innerText = input;
  li.id = 'li';
  textTarefa.value = '';
  listaTarefa.appendChild(li);
}

botaoAdi.addEventListener('click', adicionarTarefa);

function removendoClasse() {
  // seleciona o elemento com a classe selected na posição 0;
  const li = document.getElementsByClassName('selected')[0];
  // se caso ele achar um li na posição 0 ele vai exclui-lo;
  if (li) {
    li.classList.remove('selected');
  }
}

listaTarefa.addEventListener('click', (event) => {
  removendoClasse();

  event.target.classList.add('selected');
});

// Source=Requisito 8 inspirado na resolução do Ygor Lages link:https://github.com/tryber/sd-013-b-project-todo-list/tree/ygor-project-todo-list

listaTarefa.addEventListener('dblclick', (doubleclick) => {
  doubleclick.target.classList.toggle('completed');
});

botaoApaga.addEventListener('click', () => {
  const apagaSelecionado = document.querySelectorAll('li');
  for (let index = 0; index < apagaSelecionado.length; index += 1) {
    apagaSelecionado[index].remove();
  }
});

botaoFinalizados.addEventListener('click', () => {
  const apagaFinalizado = document.querySelectorAll('.completed');
  for (let index = 0; index < apagaFinalizado.length; index += 1) {
    apagaFinalizado[index].remove();
  }
});

botaoAddTarefas.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  console.log(li);
  const items = [];
  const completeds = [];

  for (let index = 0; index < li.length; index += 1) {
  // vai adicionar o texto do li no array items
    items.push(li[index].innerText);
    // se o classlist conter completed e pegar o index
    if (li[index].classList.contains('completed') === true) {
      completeds.push(index);
    }
  }
  // adiciona ao local storage como chave items e completeds value
  localStorage.setItem('items', JSON.stringify(items));
  localStorage.setItem('completeds', JSON.stringify(completeds));
});

window.onload = () => {
  // armazendo os items
  let items = localStorage.getItem('items');
  if (items !== null && items.length > 0) {
    // usa o json para voltar ao array
    items = JSON.parse(items);
    const completeds = JSON.parse(localStorage.getItem('completeds'));

    items.forEach((value, index) => {
      const li = document.createElement('li');

      if (completeds.indexOf(index) !== -1) {
        li.className = 'completed';
      }
      li.innerText = value;
      listaTarefa.appendChild(li);
    });
  }
};
// Essa função foi inspirada nesse link: https://www.ti-enxame.com/pt/javascript/mover-um-elemento-um-lugar-para-cima-ou-para-baixo-na-arvore-do-dom-com-javascript/822635469/

botaoCima.addEventListener('click', () => {
  const li = document.querySelector('.selected');
  // aqui estou pegando o no pai da li e adicionando a li selected no elemento anterior
  if (li != null && li.previousElementSibling) {
    li.parentNode.insertBefore(li, li.previousElementSibling);
  }
});

botaoBaixo.addEventListener('click', () => {
  const li = document.querySelector('.selected');
  if (li != null && li.nextElementSibling) {
    li.parentNode.insertBefore(li.nextElementSibling, li);
  }
});

botaoApagaSelecionado.addEventListener('click', () => {
  const selecionado = document.querySelector('.selected');
  selecionado.remove();
});
