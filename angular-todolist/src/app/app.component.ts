import { Component } from '@angular/core';

//decorator component to config our component to tell him what is 
//the name of the selector and templateUrl and styleUrls 

//selector will be the name of the tag in html <selectorValue></selectorValue>
//templateUrl will be the path of the html file , sames as styleUrls
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//inside the class will be the props and constructor
export class AppComponent {
  title: string = 'angular-todolist';
  //constructors are important to use services 
  constructor(
    // here services 
  ) {
    // use service here and init your values of this component
  }
}
