import {Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import {combineAll} from "rxjs/operator/combineAll";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  appState = 'default';
  oldTest;
  constructor(private _todoservice: TodoService) {
  }

  ngOnInit() {
    this.todos = this._todoservice.getTodos();
  }

  addTodo() {
    let newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);

    this._todoservice.addTodo(newTodo);
  }
  deleteToTo(todoText) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todoservice.deleteToTo(todoText);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldTest = todo.text;
    this.text = todo.text;
  }

  updateTodo() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === this.oldTest) {
        this.todos[i].text = this.text;
      }
    }
    this._todoservice.updateTodo(this.oldTest, this.text);
  }

  clearListTodo() {

    this._todoservice.clearList();
  }
}
