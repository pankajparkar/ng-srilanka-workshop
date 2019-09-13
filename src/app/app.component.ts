import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'n-things-that-angular-dev-should-know';
  albums;
  photos;
  album;
  photo;
  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(
      data => this.albums = data
    )
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(
      data => this.album = data
    )
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(
      data => this.photos = data
    )
    this.http.get('https://jsonplaceholder.typicode.com/photos/1').subscribe(
      data => this.photo = data
    )
  }
}
