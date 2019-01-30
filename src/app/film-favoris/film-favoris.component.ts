import { Component, OnInit } from '@angular/core';
import { FilmFavorisService } from '../film-fav-service/film-favoris.service';

@Component({
  selector: 'app-film-favoris',
  templateUrl: './film-favoris.component.html',
  styleUrls: ['./film-favoris.component.css']
})
export class FilmFavorisComponent implements OnInit {

  private filmFavoris = [];

  constructor(private filmFav: FilmFavorisService) { }

  supprimerFav(film) {
    this.filmFav.supprimerFilmFav(film);
  }
  getFilmFav() {
    return this.filmFavoris;
  }
  
  ngOnInit() {
    this.filmFav.getFilmFav().subscribe(film => this.filmFavoris.push(film));
  }

}