import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
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
  constructor(private todoService: TodoService) { }

  //used mostly to init the object if there is no services 
  ngOnInit(): void {
    //getting the todo
    try {
      //must subscribe to the service like .then() 
      this.todoService.getTodos().subscribe(todos => {
        // saving todos 
        this.todos = todos;
      });
    } catch (e) {
      console.log(`error ${e}`)
    }
  }
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
  }

}