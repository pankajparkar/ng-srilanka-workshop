import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MoviesDetailsComponent},
  {path: '**', redirectTo: 'movies'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
