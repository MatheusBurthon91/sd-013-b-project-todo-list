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

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function completeTask(event) {
  
}  
// Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
const clear = document.createElement('button');
clear.id = 'apaga-tudo';
clear.innerHTML = 'Apagar';
const list = document.getElementById('lista-tarefas');
list.appendChild(clear);

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
const remove = document.createElement('button');
remove.id = 'remover-finalizados';
remove.innerHTML = 'Remover Finalizados';
list.appendChild(remove);
