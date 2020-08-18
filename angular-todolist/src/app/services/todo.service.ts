import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//reactive extension to make data life stream mode 
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = "https://jsonplaceholder.typicode.com/todos"
  limit: String = "/?_limit=5"
  constructor(private http: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    //get<Todo[]> means formatted as Todo object 
    let todos = this.http.get<Todo[]>(`${this.url}${this.limit}`);
    return todos
  }
  markTodo(todo: Todo): Observable<any> {
    const newUrl = `${this.url}/${todo.id}`
    return this.http.put(newUrl, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const newUrl = `${this.url}/${todo.id}`;
    return this.http.delete<Todo>(newUrl, httpOptions);

  }
  addTodo(todo: Todo): Observable<Todo> {
    const newUrl = `${this.url}`;
    return this.http.post<Todo>(newUrl, todo, httpOptions);
  }
}