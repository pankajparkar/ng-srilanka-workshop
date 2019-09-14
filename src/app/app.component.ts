import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies$;
  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.movies$ = this.http.get('http://www.omdbapi.com/?apikey=7dcc7fb6&s=Rock&type=movie&page=1');
  }
}
