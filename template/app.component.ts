import { Component } from '@angular/core';
import { first } from 'rxjs';


@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utube';
  style: string = 'first';
  bgImage: string='image';
 
}
