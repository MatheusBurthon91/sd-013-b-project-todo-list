const containerTasks = document.getElementById('container-tasks');

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
inputTasks.type = 'text';
inputTasks.placeholder = 'Digite aqui sua tarefa...';
inputTasks.size = '50';
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

btnCreateTasks.addEventListener('click', () => {
  const itemList = document.createElement('li');
  itemList.innerText = inputTasks.value;
  itemList.className = 'item-list';
  inputTasks.value = '';
  ordemList.appendChild(itemList);
  itemList.addEventListener('click', () => {
    itemList.style.backgroundColor = corDefault;
  });
});

// for (let index = 1; index < selectItem.length; index += 1) {
//   selectItem.children[index].addEventListener('click', () => {
//    alert('oi');
//   });
// }

// btnCreateTasks.addEventListener('click', () => {

// for (let index = 0; index < selectItem.length; index += 1) {
//  const corFundo = selectItem[index].style.backgroundColor;

//   if (corDefault === corFundo) {
//     selectItem[index].className += ' selectioned';
//   }
// selectItem[index].addEventListener('click', () => {
//   // selectItem[index].style.backgroundColor = 'transparent';
// });

// });

localStorage.clear();
