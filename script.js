// Ajuda do Baeta para entendimento da logica do exercicio 7;
function clear() {
  const lista = document.querySelector('#lista-tarefas');
  // if (lista) {
  // for (let index = 0; index < tarefas.length; index += 1) {
  //   tarefas[index].remove();
  // }

  // }
  lista.innerHTML = '';
}
function btn() {
  const botao = document.querySelector('#apaga-tudo');
  botao.addEventListener('click', clear);
}
btn();

function color(liItem) {
  liItem.addEventListener('click', (event) => {
    const evento = event.target;
    if (liItem !== evento) {
      evento.classList.remove('.color');
    }
    evento.classList.add('.color');
    evento.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

function element() {
  const text = document.querySelector('#texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  const newElement = document.createElement('li');
  color(newElement);
  document.querySelector('#texto-tarefa').value = null;
  newElement.innerText = text;
  newElement.classList = '.completed';
  list.appendChild(newElement);
}

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', element);
