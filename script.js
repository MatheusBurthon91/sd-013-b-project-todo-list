window.onload = function () {
  const btnOk = document.getElementById('criar-tarefa')
  const olTasks = document.getElementById('lista-tarefas')
  btnOk.addEventListener('click', createTasks)
  olTasks.addEventListener('click', changeBackGround)
  olTasks.addEventListener('dblclick', completeTasks)

}

function completeTasks(event) {
  const elementoAlvo = event.target
  let classList = elementoAlvo.className
  const completed = elementoAlvo.className
  let seaparado = completed.split(' ')

  if (seaparado.length > 2) {
    for (let i = 0; i < seaparado.length; i += 1) {
      if (seaparado[i] === 'completed') {
        seaparado.splice(i, 1)
        elementoAlvo.className = seaparado.join(' ')
        console.log(completed[i]);
      }
    }

  } else {
    elementoAlvo.className = classList.replace(' completed', '')
    elementoAlvo.className += ' completed'
  }


}


function createTasks() {
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  let conteudo = document.getElementById('texto-tarefa')
  li.innerText = conteudo.value
  conteudo.value = '';
  ol.appendChild(li)

}

function changeBackGround(event) {
  const elementoAlvo = event.target;
  let classList = elementoAlvo.className;
  const select = document.getElementsByClassName('select');


  for (let i = 0; i < select.length; i += 1) {
    let clas = select[i].className
    clas = clas.replace(' select', '')
    select[i].className = clas
  }


  elementoAlvo.className = classList.replace(' select', '');

  elementoAlvo.className += ' select'



}