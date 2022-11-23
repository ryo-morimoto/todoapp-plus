import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { render, element } from "./view/html-util.js";

export class App {
  #todoListModel = new TodoListModel();
  mount() {
    const formElement = document.querySelector("[data-todo='form']");
    const inputElement = document.querySelector("[data-todo='input']");
    const containerElement = document.querySelector("[data-todo='todo-list']");

    this.#todoListModel.onChange(() => {
      const todoListElement = element`<ul></ul>`;
      const todoItems = this.#todoListModel.getTodoItems();
      todoItems.forEach((item) => {
        const todoItemElement = element`<li>${item.title}</li>`;
        todoListElement.prepend(todoItemElement);
      });
      render(todoListElement, containerElement);
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();

      this.#todoListModel.addTodo(
        new TodoItemModel({
          title: inputElement.value,
          completed: false,
        })
      );
      inputElement.value = "";
    });
  }
}
