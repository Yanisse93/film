import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmFavorisComponent } from './film-favoris/film-favoris.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'favoris', component: FilmFavorisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
