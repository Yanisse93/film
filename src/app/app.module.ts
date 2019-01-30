import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmFavorisComponent } from './film-favoris/film-favoris.component';
import { AccueilComponent } from './accueil/accueil.component'


@NgModule({
  declarations: [
    AppComponent,
    FilmFavorisComponent,
    AccueilComponent
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
