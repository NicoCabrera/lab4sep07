import { Injectable } from '@angular/core';
import { Game } from '../classes/game';
import { MiHttpService } from './mi-http.service';

@Injectable()
export class GameServiceService {

  constructor(public miHttp: MiHttpService) { }

  getData() {
    let listadoJuegos = new Array<Game>();
    for (var index = 0; index < 4; index++) {
      listadoJuegos.push(new Game());
    }
    return listadoJuegos;
  }

  public listarServicio() {
    this.miHttp.httpGetPromise('https://restcountries.eu/rest/v2/all')
      .then(data=>{
        console.log(data);
      })
      .catch(error=>{
        console.log(error);
      });
  }
}
