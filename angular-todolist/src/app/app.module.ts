/* -------------- Angular built in  Modules -------------- */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//to use http request
import { HttpClientModule } from '@angular/common/http';
//to allow to binding values from form 
import { FormsModule } from '@angular/forms';


/* -------------- Components -------------- */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './pages/about/about.component';

/* the entry of the app where you will put your 
components inside the decelerations */
/* imports is for the modules like http and so on   */
/* the provider is for the services  */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
