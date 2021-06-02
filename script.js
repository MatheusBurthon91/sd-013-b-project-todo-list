document.getElementById('criar-tarefa').addEventListener('click', addAssigment);
const ol = document.getElementById('lista-tarefas');
let TextBox = document.getElementById('texto-tarefa');

function addAssigment(event) {
  const adicionar = event;
	let listas = document.createElement('li');
	listas.className = 'listItem';
	listas.innerText = TextBox.value;
	TextBox.value = '';
	ol.appendChild(listas);
}