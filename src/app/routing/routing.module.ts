import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActividadAritmeticaComponent } from '../actividad-aritmetica/actividad-aritmetica.component';
import { AdivinaNumeroComponent } from '../adivina-numero/adivina-numero.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { ResultListComponent } from '../result-list/result-list.component';
import { ActividadMasListaComponent } from '../actividad-mas-lista/actividad-mas-lista.component';
import { AdivinaMasListaComponent } from '../adivina-mas-lista/adivina-mas-lista.component';
import { ListadoComponent } from '../listado/listado.component';
import { GameServiceService } from '../services/game-service.service';

const appRoutes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MainMenuComponent,
    children: [
      {
        path: "adivina",
        component: AdivinaMasListaComponent
      },
      {
        path: "actividad",
        component: ActividadMasListaComponent
      },]
  },
  {
    path: "listado",
    component: ListadoComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    ActividadAritmeticaComponent,
    AdivinaNumeroComponent,
    LoginComponent,
    ErrorComponent,
    MainMenuComponent,
    ResultListComponent,
    ActividadMasListaComponent,
    AdivinaMasListaComponent,
    ListadoComponent
  ]
})
export class RoutingModule { }
