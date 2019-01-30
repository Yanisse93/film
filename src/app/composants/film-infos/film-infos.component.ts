import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmApiService } from 'src/app/services/film-api/film-api.service';

@Component({
  selector: 'app-film-infos',
  templateUrl: './film-infos.component.html',
  styleUrls: ['./film-infos.component.css']
})
export class FilmInfosComponent implements OnInit {

  private filmInfo = [];

  constructor(private url: ActivatedRoute, private filmService: FilmApiService) { }

  ngOnInit() {
    const id = this.url.snapshot.paramMap.get('id');
    this.filmService.getFilmInfos(id).subscribe(film => this.filmInfo.push(film));
  }

  getFilmInfos() {
    console.log(this.filmInfo);
    
    return this.filmInfo;
  }

}
