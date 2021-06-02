const buttonText = document.getElementById('criar-tarefa');

function clickAddList() {
  const mainList = document.getElementById('lista-tarefas');
  const inputText = document.getElementById('texto-tarefa');
  const lineList = document.createElement('li');
  console.log(inputText.value)
  lineList.innerText = inputText.value;
  mainList.appendChild(lineList)
  inputText.value = '';
}

buttonText.addEventListener('click', clickAddList);