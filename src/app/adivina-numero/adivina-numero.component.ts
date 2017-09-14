import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from '../classes/game';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent {
  randomValue: any;
  userNumber: any;
  hideMessage: boolean;
  win: boolean;
  game: Game;

  @Output()
  emitter: EventEmitter<Game>;

  constructor() {
    this.newGame();
    this.hideMessage = true;
    this.win = false;
    this.emitter = new EventEmitter<Game>();
  }

  generate() {
    this.game.generateRandomValue();
    this.hideMessage = true;
  }

  newGame() {
    this.game = new Game();
    this.game.name = GAME_NAME;
    this.game.player = localStorage.getItem("user");
    this.game.generateRandomValue();
  }

  verify() {
    this.win = this.game.verify();
    this.hideMessage = false;
    this.emitter.emit(this.game);
    let lastUserNumber = this.game.userNumber;
    this.newGame();
    this.game.userNumber = lastUserNumber;
  }
}
const GAME_NAME: string = "Adivina el número";