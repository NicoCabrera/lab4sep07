import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {


  constructor(public http: Http) {

  }

  public httpGetPromise(url: string, obj?: any) {
    return this.http.get(url)
      .toPromise()
      .then()
      .catch();
  }

    private extraerDatos(resp:Response){
      return resp.json() || {};
    }
    private hanldeError(msj){
      return msj;
    }
    
}
