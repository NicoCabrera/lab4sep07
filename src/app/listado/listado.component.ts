import { Component, OnInit } from '@angular/core';
import { Game } from '../classes/game';
import { GameServiceService } from '../services/game-service.service';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
//tener un atributoi publico llamado "listadoParaCompartir", éste campo será el Input en el otro componente
listadoParaCompartir:any;
gameService:GameServiceService;
//creamos una propìedad pra guardar la referencia al servicio
  constructor(gameServiceService:GameServiceService) { 
    this.gameService = gameServiceService;
  }

  ngOnInit() {
  }

  llamarService(){
    this.listadoParaCompartir = this.gameService.getData();
  }

  llamarHttp(){
    this.gameService.listarServicio();
  }
}
