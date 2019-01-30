import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmFavorisComponent } from './composants/film-favoris/film-favoris.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { FilmInfosComponent } from './composants/film-infos/film-infos.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmFavorisComponent,
    AccueilComponent,
    FilmInfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
