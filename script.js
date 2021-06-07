//Cria a li em ordem
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  let novaT = document.createElement('li');
  let ol = document.querySelector('#lista-tarefas');
  let input = document.querySelector('#texto-tarefa').value;
  ol.appendChild(novaT).innerHTML = input;

  //Consegui chegar a esta solução usando a ideia do César Sousa nesta pagina  https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
  document.querySelector('#texto-tarefa').value = '';

  novaT.addEventListener('click', function selecionar() {
    novaT.classList.toggle('selected')
    })  
})


// Complicado Preciso retirar uma classe
  
