function clickListItem(event) {
  const { target } = event;
  target.style.backgroundColor = 'rgb(128, 128, 128)';
}
function createTaskPress(event) {
  console.log('teste');
  const input = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  if (input.value !== '') {
    listItem.innerText = input.value;
    input.value = '';
    list.appendChild(listItem);
    list.addEventListener('click', clickListItem);
  }
}
