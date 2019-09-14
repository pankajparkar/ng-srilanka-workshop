import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie$;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    const timer$ = timer(5000)
    // Data get with the delay
    this.movie$ = timer$.pipe(
      () => this.http.get('http://www.omdbapi.com/?apikey=7dcc7fb6&i='+id)
    )
  }

}
