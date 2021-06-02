let list = document.getElementById('lista-tarefas'); //ol

//5 e 6
const button = document.getElementById('criar-tarefa');
function addTask() {
  //pegar o conteudo do input e adicionar como uma nova li da ol
  let inputValue = document.querySelector('input').value; //input
  const newValue = document.createElement('li'); //li
  newValue.appendChild(document.createTextNode(inputValue));
  list.appendChild(newValue);
  document.querySelector('input').value = '';
}
button.addEventListener('click', addTask);


//7 
function changeColor(event) {
  let grayColor = 'rgb(128,128,128)'
  let clickedLi = event.target
  clickedLi.style.backgroundColor = grayColor
}
list.addEventListener('click', changeColor);

// 8
let li = document.querySelectorAll('li')

// function removeBackgroundColor() {
  //   for (let index = 0; index < li.length; index += 1) {
    //     if (li[index].style.backgroundColor === 'rgb(128,128,128)') {
      //       li[index].style.backgroundColor = 'white';
      //     }
      //   }
      // }
      // li.addEventListener('click', removeBackgroundColor)
      
// 10
const clearButton = document.getElementById('apaga-tudo');
function clearAll() {
  list.innerHTML = ''
}
clearButton.addEventListener('click', clearAll)







