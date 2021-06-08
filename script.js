// -------> Questão 7 <------- //
// -------> Questão 8 <------- //

function coloreTarefa(clicado) {
  const tarefa = clicado.target;
  const selecionado = document.querySelector('.selected');
  if (selecionado === null) {
    tarefa.classList.add('selected');
  } else {
    selecionado.classList.remove('selected');
    tarefa.classList.add('selected');
  }
}

// -------> Questão 9 <------- //

function riscaTarefa(event) {
  event.target.classList.toggle('completed');
}

// --------->Questão 5 <--------- //
// --------->Questão 6 <--------- //

// Nomeia o botão //

const botao = document.querySelector('#criar-tarefa');
botao.innerText = 'Adicionar tarefa';

// Adiciona elementos na lista //

function addTarefa() {
  const box = document.querySelector('#texto-tarefa');
  botao.addEventListener('click', () => {
    if (box.value !== '') {
      const tarefa = document.createElement('li');
      tarefa.innerText = box.value;
      tarefa.className = 'lista';
      tarefa.addEventListener('click', coloreTarefa);
      tarefa.addEventListener('dblclick', riscaTarefa);
      const listaOrdenada = document.querySelector('#lista-tarefas');
      listaOrdenada.appendChild(tarefa);
      box.value = '';
    }
  });
}
addTarefa();

// Cria botões para a página //

function createButton(nome, id) {
  const position = document.querySelector('#body');
  const botaoClear = document.createElement('button');
  botaoClear.id = id;
  botaoClear.innerText = nome;
  position.appendChild(botaoClear);
}
createButton('Limpar lista', 'apaga-tudo');
createButton('Limpar realizadas', 'remover-finalizados');
createButton('Salvar lista', 'salvar-tarefas');
createButton('Remover item', 'remover-selecionado');

// -------> Questão 10 <------- //
// -------> Questão 11 <------- //

// limpa a lista //
function clear() {
  const botaoClear = document.querySelector('#apaga-tudo');
  botaoClear.addEventListener('click', () => {
    const listaOrdenada = document.getElementById('lista-tarefas');
    const itens = document.querySelectorAll('li');
    if (listaOrdenada.Children !== null) {
      for (let index = 0; index < itens.length; index += 1) {
        listaOrdenada.removeChild(itens[index]);
      }
    }
  });
}
clear();

// limpa a lista de tarefas realizadas //
function clearTarefasRealizadas() {
  const botaoClear = document.querySelector('#remover-finalizados');
  botaoClear.addEventListener('click', () => {
    const listaOrdenada = document.getElementById('lista-tarefas');
    const itensRiscados = document.querySelectorAll('.completed');
    if (listaOrdenada.Children !== null) {
      for (let index = 0; index < itensRiscados.length; index += 1) {
        listaOrdenada.removeChild(itensRiscados[index]);
      }
    }
  });
}
clearTarefasRealizadas();

// -------> Questão 12 <------- //
// function salvaTarefas() {
//   const botaoSave = document.querySelector('#salvar-tarefas');
//   botaoSave.addEventListener('click', () => {
//     const listaOrdenada = document.getElementById('lista-tarefas');
//     const item = document.getElementsByTagName('li');
//     if (listaOrdenada.Children !== null) {
//       localStorage.setItem(listaOrdenada, item);
//     }
//   });
// }
// salvaTarefas();

// -------> Questão 14 <------- //
function clearTarefaSelecionada() {
  const botaoRemove = document.querySelector('#remover-selecionado');
  botaoRemove.addEventListener('click', () => {
    const listaOrdenada = document.getElementById('lista-tarefas');
    const itemSelecionado = document.querySelector('.selected');
    if (listaOrdenada.Children !== null) {
      listaOrdenada.removeChild(itemSelecionado);
    }
  });
}
clearTarefaSelecionada();
