import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-actividad-aritmetica',
  templateUrl: './actividad-aritmetica.component.html',
  styleUrls: ['./actividad-aritmetica.component.css']
})
export class ActividadAritmeticaComponent {

  constructor() { }

  showMessage(){
    alert("Usted ganó");
  }

}
