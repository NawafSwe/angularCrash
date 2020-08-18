import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  //for adding new todo 
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  //submitting new todo 
  onSubmit() {
    const todo = { id: 234343, title: this.title, completed: false }
    //adding in the ui
    this.addTodo.emit(todo);

  }
}
