import { Component, Input, OnInit } from '@angular/core';
// decorateur
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
// recupérer le nom 
@Input() film:any;
  constructor() { }

  ngOnInit(): void {
  }

}
