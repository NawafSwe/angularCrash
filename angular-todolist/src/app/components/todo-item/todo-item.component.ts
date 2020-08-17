import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service'
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

  constructor(private todoService: TodoService) { }

  ngOnInit(): void { }
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    //returning classes that will be applies to the element 
    return classes
  }
  markTodo(todo: Todo) {
    //in the ui 
    todo.completed = !todo.completed;
    //updating the server side 

    try {
      this.todoService.markTodo(todo).subscribe(todo => {
        console.log(todo);
      });
    } catch (error) {
      console.log(`error ${error.message}`)
    }
  }
}
