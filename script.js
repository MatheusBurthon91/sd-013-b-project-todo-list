const containerTasks = document.getElementById('container-tasks');

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
// inputTasks.type = 'text';
// inputTasks.placeholder = 'Digite aqui sua tarefa...';
// inputTasks.size = '50';
inputTasks.className = 'item-container';
containerTasks.appendChild(inputTasks);

const btnCreateTasks = document.createElement('button');
btnCreateTasks.id = 'criar-tarefa';
btnCreateTasks.innerText = 'Adiconar';
btnCreateTasks.className = 'item-container';
containerTasks.appendChild(btnCreateTasks);

const ordemList = document.createElement('ol');
ordemList.id = 'lista-tarefas';
containerTasks.appendChild(ordemList);

const corDefault = 'rgb(128, 128, 128)';

// localStorage.setItem(`tarefa ${ordemList.childElementCount}.`, itemList.innerText);

function clearSelect() {
  const listItem = document.getElementsByClassName('selectioned');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].className === 'selectioned') {
      listItem[index].style.backgroundColor = 'transparent';
      listItem[index].className = 'item-list';
    }
  }
}

btnCreateTasks.addEventListener('click', () => {
  const itemList = document.createElement('li');
  itemList.innerText = inputTasks.value;
  itemList.className = 'item-list';
  inputTasks.value = '';
  ordemList.appendChild(itemList);
  itemList.addEventListener('click', () => {
    if (itemList.style.backgroundColor !== corDefault) {
      itemList.style.backgroundColor = corDefault;
      clearSelect();
      itemList.className = 'selectioned';
    } else {
      itemList.style.backgroundColor = 'transparent';
      itemList.className = 'item-list';
    }
  });
});

localStorage.clear();
