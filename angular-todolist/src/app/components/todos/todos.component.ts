import { Component, OnInit } from '@angular/core';


//importing models 
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  //used mostly to do services works
  constructor() { }

  //used mostly to init the object if there is no services 
  ngOnInit(): void {
    this.todos = [
      { id: 1, title: "love Arwa", completed: false },
      { id: 1, title: "love Arwa", completed: false },
      { id: 1, title: "love Arwa", completed: false }
    ]
  }
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
  }

}
