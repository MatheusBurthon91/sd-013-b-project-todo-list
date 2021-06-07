document.querySelector('#criar-tarefa').addEventListener('click', function () {
  let novaT = document.createElement('li');
  let ol = document.querySelector('#lista-tarefas');
  let input = document.querySelector('#texto-tarefa').value
  ol.appendChild(novaT).innerHTML = input
  document.querySelector('#texto-tarefa').reset()
})