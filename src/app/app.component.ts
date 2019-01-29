import { Component, OnInit } from '@angular/core';
import { FilmApiService } from './film-api/film-api.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'film-api';


  public film = [];
  
  constructor(private films: FilmApiService) {}

  getFilm() {
    this.films.getFilm("popular").subscribe(film => this.film.push(film));
  }
  
  afficheFilm() {
    return this.film;
  }
  ngOnInit() {
    this.getFilm();
    console.log(this.film);
  }
  
  
}
