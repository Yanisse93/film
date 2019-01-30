import { Component, OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/services/film-api/film-api.service';
import { FilmFavorisService } from 'src/app/services/film-fav-service/film-favoris.service';

@Component({
  selector: 'accueil-root',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {

  private film = [];

  constructor(private films: FilmApiService, private filmFavoris: FilmFavorisService) { }

  getFilms() {
    this.films.getFilms("popular").subscribe(film => this.film.push(film));
  }
  
  afficheFilm() {
    return this.film;
  }
  
  ajouteFav(film) {
    this.filmFavoris.ajouteFilmFav(film);
    
  }

  ngOnInit() {
    this.getFilms();    
  }


}
