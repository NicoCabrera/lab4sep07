import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActividadAritmeticaComponent } from './actividad-aritmetica/actividad-aritmetica.component';
import { AdivinaNumeroComponent } from './adivina-numero/adivina-numero.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ResultListComponent } from './result-list/result-list.component';
import { RoutingModule } from "./routing/routing.module";
import { GameServiceService } from './services/game-service.service';
import { MiHttpService } from './services/mi-http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    GameServiceService,
    MiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
