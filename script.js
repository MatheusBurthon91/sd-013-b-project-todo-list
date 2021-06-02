function createElement(text, id) {
  const element = document.createElement('li');
  element.innerText = text;
  element.id = id;
  element.className = 'tarefa';
  return element;
}

window.onload = () => {
  createOrderedList();
};
