import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing components 
import { TodosComponent } from '../app/components/todos/todos.component';
import { AboutComponent } from '../app/pages/about/about.component'

const routes: Routes = [
  {
    path: '',  // making the todosCOmponent to be the root 
    component: TodosComponent

  }
  ,
  { path: 'about', component: AboutComponent }
  //others 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
