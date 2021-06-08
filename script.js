function createTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  button.addEventListener('click', function () {
    if (input.value.length > 0) {
      const listItem = document.createElement('li');
      listItem.innerText = input.value;
      listItem.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
      listItem.addEventListener('click', changeColor);
      list.appendChild(listItem);
      input.value = '';
    } else {
      alert('Digite ao menos 1 caractere');
    }
  });
}

createTask();

function changeColor (event) {
  const list = document.getElementsByTagName('li');
    for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor === 'rgb(128,128,128)') {
        list[index].style.backgroundColor = null;
    }
     event.target.style.backgroundColor = 'rgb(128,128,128)';
   }; 
 }

changeColor();


const clear = document.createElement('button');
clear.id = 'apaga-tudo';
clear.innerHTML = 'Apagar';
const list = document.getElementById('lista-tarefas');
list.appendChild(clear);

const remove = document.createElement('button');
remove.id = 'remover-finalizados';
remove.innerHTML = 'Remover Finalizados';
list.appendChild(remove);
