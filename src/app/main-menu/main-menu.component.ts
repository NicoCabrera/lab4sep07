import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  title:string;
  subtitle:string;

  constructor() {
    this.title = "Sala de juegos";
    this.subtitle = "Elija algunos de los juegos del menú.";
   }

  ngOnInit() {
  }

}
