//Cria a li em ordem
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  let novaT = document.createElement('li');
  let ol = document.querySelector('#lista-tarefas');
  let input = document.querySelector('#texto-tarefa').value;
  ol.appendChild(novaT).innerHTML = input;

  //Consegui chegar a esta solução usando a ideia do César Sousa nesta pagina  https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
  document.querySelector('#texto-tarefa').value = '';

  novaT.addEventListener('click', selecionar)  
})
// Com a ajuda do Pedro e do Matheus eu consegui chegar a esta conclusão. O Ricardo me ajudou também em abrir meus olhos para ler novamente o event.target. Eu fui relutante em pedir ajuda a outra pessoa pois eu sinto que estou atrapalhando muito eles e acabo ficando travado. Hoje foi um passo mais próximo da liberdade.
function selecionar(event) {
  console.log(event.target)
    const classe = document.querySelector('.selected') 
    if (classe != null) {
      classe.classList.remove('selected')
    }
    event.target.classList.add('selected')
}

  