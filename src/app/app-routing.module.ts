import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MovieResolverService } from './movie-resolver.service';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MoviesDetailsComponent, resolve: {
    movie: MovieResolverService
  }},
  {path: '**', redirectTo: 'movies'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [MovieResolverService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
