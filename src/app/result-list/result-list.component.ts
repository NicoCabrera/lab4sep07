import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../classes/game';
@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input()
  results: Array<Game>;
  viewResultData: boolean;
  buttonMessage: string;
  constructor() {
    this.viewResultData = false;
    this.buttonMessage = "Ver";
  }

  ngOnInit() {
  }

  viewResultsList() {
    this.viewResultData = !this.viewResultData;
    this.changeMessage();
  }

  changeMessage() {
    if (this.viewResultData == false) {
      this.buttonMessage = "Ver";
    } 
    else {
      this.buttonMessage = "Ocultar";
    }
  }

}
