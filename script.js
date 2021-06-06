let texto = '';
let temp = ''


function capturar(){
texto = document.getElementById('texto-tarefa').value;
temp = texto;

let lista = document.querySelector('#lista-tarefas');
novoItem = document.createElement('li');
novoItem.innerHTML = temp;
lista.appendChild(novoItem);
document.getElementById('texto-tarefa').value = '';
}







