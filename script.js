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
      const listaOrdenada = document.querySelector('#lista-tarefas');
      listaOrdenada.appendChild(tarefa);
      box.value = "";
    };
  });
};
addTarefa();

// -------> Questão 7 <------- //
// -------> Questão 8 <------- //

function coloreTarefa(event) {
  const tarefa = event.target;
  const selecionado = document.querySelector('.selected');
  if (selecionado === null) {
    tarefa.classList.add('selected');
  }
  else {
    selecionado.classList.remove('selected');
    tarefa.classList.add('selected');
  };
};
coloreTarefa();