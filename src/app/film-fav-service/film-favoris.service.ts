import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FilmFavorisService {

  private filmFav = new BehaviorSubject<any[]>([]);
  observ = this.filmFav.asObservable();

  constructor() { }

  ajouteFilmFav(film) {
    this.filmFav.next(this.filmFav.getValue().concat(film));
  }

  supprimerFilmFav(film) {
    let copieFilmFav: any[] = this.filmFav.getValue();
    copieFilmFav.forEach((item, index) => {
      if (item === film) { 
        copieFilmFav.splice(index, 1); 
      }
    });
    this.filmFav.next(copieFilmFav);
  }

  getFilmFav() {
    return this.filmFav;
  }
}
