let todoIdx = 0;

export class TodoItemModel {
  id;
  title;
  completed;

  /**
   * @param {{title: string, completed: boolean}}
   */
  constructor({ title, completed }) {
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed;
  }
}
