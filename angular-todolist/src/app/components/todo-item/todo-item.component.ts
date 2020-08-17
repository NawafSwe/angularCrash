import { Component, OnInit, Input } from '@angular/core';
//input used when we receive a props values from others 
import { Todo } from '../../models/Todo'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //putting input object to bind 
  @Input() todo: Todo

  constructor() { }

  ngOnInit(): void {

  }


  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    //returning classes that will be applies to the element 
    return classes
  }
  markTodo() {
    this.todo.completed = !this.todo.completed;
  }

  @Input() deleteTodo

}
