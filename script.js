// --------->Questão 5 <--------- //
// --------->Questão 6 <--------- //

// Nomeia o botão //

const botao = document.querySelector('#criar-tarefa');
botao.innerText = 'Adicionar tarefa'

// Adiciona elementos na lista //

function addTarefa() {
  const botao = document.querySelector('#criar-tarefa');
  const box = document.querySelector('#texto-tarefa');
  botao.addEventListener('click', function () {
    if(box.value !== "") {
      const tarefa = document.createElement ('li');
      tarefa.innerText = box.value;
      tarefa.className = 'lista';
      tarefa.addEventListener('click', coloreTarefa);
      tarefa.addEventListener('dblclick', riscaTarefa);
      const listaOrdenada = document.querySelector('#lista-tarefas');
      listaOrdenada.appendChild(tarefa);
      box.value = "";
    };
  });
};
addTarefa();

// -------> Questão 7 <------- //
// -------> Questão 8 <------- //

function coloreTarefa(clicado) {
  const tarefa = clicado.target;
  const selecionado = document.querySelector('.selected');
  if (selecionado === null) {
    tarefa.classList.add('selected');
  }
  else {
    selecionado.classList.remove('selected');
    tarefa.classList.add('selected');
  };
};

// -------> Questão 9 <------- //

function riscaTarefa (event) {
    event.target.classList.toggle('completed')
};

// -------> Questão 10 <------- //
// -------> Questão 11 <------- //

// Cria botões //

function createButton(nome, id) {
  const position = document.querySelector('#body');
  const botaoClear = document.createElement('button');
  botaoClear.id = id;
  botaoClear.innerText = nome;
  position.appendChild(botaoClear);
  
}
createButton('Limpar lista', 'apaga-tudo');
createButton('Limpar tarefas realizadas', 'remover-finalizados');

  
// limpa a lista //
function clear() {
  let botaoClear = document.querySelector('#apaga-tudo');
  botaoClear.addEventListener('click', function() {
    const listaOrdenada = document.getElementsByTagName('ol');
    const itens = document.querySelectorAll('li');
    if(listaOrdenada.Children !== null) {
      listaOrdenada.removeChildren(itens);
    }
  });
};
  
  clear();