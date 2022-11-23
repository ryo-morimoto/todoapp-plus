import { render, element } from "./view/html-util.js";

export class App {
  mount() {
    const formElement = document.querySelector("[data-todo='form']");
    const inputElement = document.querySelector("[data-todo='input']");
    const containerElement = document.querySelector("[data-todo='todo-list']");
    const todoListElement = element`<ul></ul>`;

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const todoItemElement = element`<li>${inputElement.value}</li>`;
      todoListElement.appendChild(todoItemElement);
      render(todoListElement, containerElement);

      inputElement.value = "";
    });
  }
}
