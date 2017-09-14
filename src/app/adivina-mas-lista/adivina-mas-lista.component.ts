import { Component, OnInit } from '@angular/core';
import { Game } from '../classes/game';

@Component({
  selector: 'app-adivina-mas-lista',
  templateUrl: './adivina-mas-lista.component.html',
  styleUrls: ['./adivina-mas-lista.component.css']
})
export class AdivinaMasListaComponent implements OnInit {

  gamesList:Array<Game>;
  constructor() { 
    
  }

  ngOnInit() {
    this.gamesList = new Array<Game>();
  }
  
  getGameResult(game:Game){
    this.gamesList.push(game);
    console.log(this.gamesList);
  }
}
