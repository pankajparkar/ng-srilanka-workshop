import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies$;
  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.movies$ = this.http.get('http://www.omdbapi.com/?apikey=7dcc7fb6&s=Rock&type=movie&page=1');
  }
}
