import {Component, OnInit} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  constructor(private_todoservice: TodoService) {
  }

  ngOnInit() {
    this.todos = [
      {
        text: 'line 1'
      },
      {
        text: 'line 1'
      },
      {
        text: 'line 1'
      },
    ];
  }

  addToDo() {
    this.todos.push({
      test: this.text
    });
  }
  deleteToTo(todoText) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text === todoText) {
        this.todos.splice(i, 1);
      }
    }
  }
}
