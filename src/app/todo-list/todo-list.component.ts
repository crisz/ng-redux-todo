import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux } from "ng2-redux";
import { IAppState } from "app/store";
import { ADD_TODO } from "app/actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private ngRedux: NgRedux<IAppState>, private service: TodoService) { 
  
  }

  addTodo(input) {
    if (!input.value) return; 
    console.log(this.ngRedux.getState());
    this.ngRedux.dispatch({type: ADD_TODO, todo: input.value});
  
    console.log(this.ngRedux.getState());
    input.value = '';
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.service.removeTodo(todo);
  }
  
}
