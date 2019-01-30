import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmApiService {

  
  constructor(private httpClient: HttpClient ) { }
  
  getFilms(choix): Observable<any[]>{
    const filmUrl = "https://api.themoviedb.org/3/movie/"+ choix +"?api_key=217c59632fafa28f8c88c9df26886bab&language=fr-FR";
    return this.httpClient.get<any[]>(filmUrl);
  }
  getFilmInfos(id): Observable<any>{
    const filmUrl = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=217c59632fafa28f8c88c9df26886bab&language=fr-FR";
    return this.httpClient.get<any>(filmUrl);
  }
}
