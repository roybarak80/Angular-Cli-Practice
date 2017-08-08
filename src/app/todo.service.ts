import {Injectable} from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    this.load();
  }

  getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));

  }

  deleteToTo(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === todoText) {
        todos.splice(i, 1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldTest, newText) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === oldTest) {
        todos[i].text = newText;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  clearList() {
    let todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
        todos.splice(i, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
