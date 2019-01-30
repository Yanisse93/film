import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmFavorisComponent } from '../composants/film-favoris/film-favoris.component';
import { AccueilComponent } from '../composants/accueil/accueil.component';
import { FilmInfosComponent } from '../composants/film-infos/film-infos.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'favoris', component: FilmFavorisComponent},
  {path: 'film-infos/:id', component: FilmInfosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
