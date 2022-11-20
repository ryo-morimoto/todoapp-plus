const ENTER_KEYCODE = 13;

const todoTextElement = document.getElementById("js-todo-text");
const todoListElement = document.getElementById("js-list");

todoTextElement.onkeyup = function (e) {
  if (e.keyCode !== ENTER_KEYCODE) {
    return;
  }

  newItem();
};

function newItem() {
  const todoText = todoTextElement.value;
  if (!todoText) {
    return;
  }

  const todoItem = document.createElement("li");
  todoItem.appendChild(document.createTextNode(`- ${todoText}`));
  todoItem.onclick = removeItem;

  todoListElement.insertAdjacentElement("afterbegin", todoItem);
  todoTextElement.value = "";
}

function removeItem(e) {
  e.target.remove();
}
