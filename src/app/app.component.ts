import { Component } from '@angular/core';
import { throwError } from 'rxjs';

// Décorateurs
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  films:any[] = 
  [
    { nom:'Star wars',year:'1977'},
    { nom:'The Matrix',year:'1999'},
    { nom:'SAW',year:'2002'},
  ];


}
