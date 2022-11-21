const formElement = document.querySelector("[data-todo='form']");
const inputElement = document.querySelector("[data-todo='input']");
const listElement = document.querySelector("[data-todo='todo-list'] ul");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  newItem();
});

function newItem() {
  const todoText = inputElement.value;
  if (!todoText) {
    return;
  }

  const item = document.createElement("li");
  item.appendChild(document.createTextNode(todoText));
  item.onclick = removeItem;

  listElement.insertAdjacentElement("afterbegin", item);
  inputElement.value = "";
}

function removeItem(e) {
  e.target.remove();
}
