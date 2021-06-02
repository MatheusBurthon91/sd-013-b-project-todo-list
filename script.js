function atributos(){
    const list = document.querySelector('#lista-tarefas');
    const text = document.querySelector('#texto-tarefa').value;
    const li = document.createElement('li');
    document.querySelector('#texto-tarefa').value = null;
  
    li.innerText= text;
list.appendChild(li);
}
const botao = document.querySelector('#criar-tarefa');
botao.addEventListener("click",atributos)

