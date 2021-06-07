function createTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  button.addEventListener('click', function () {
    if (input.value.length > 0) {
      const listItem = document.createElement('li');
      listItem.innerText = input.value;
      list.appendChild(listItem); 
      input.value = '';
    } else {
      alert('Erro: digite ao menos 1 caractere');
    }
  })
};

createTask();
