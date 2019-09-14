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
  movie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Data get with the delay
    this.movie = this.route.snapshot.data['movie']
  }

}
