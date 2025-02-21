import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';


@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//To declare components 
export class AppComponent {
  title = 'my-first-app';
  name:string = 'Marko';
  age:number = 23;

  
}
