import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies;
  constructor (private http: HttpClient) { }

  ngOnInit() {
    this.movies = [{"Title":"The Rock","Year":"1996","imdbID":"tt0117500","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDJjOTE0N2EtMmRlZS00NzU0LWE0ZWQtM2Q3MWMxNjcwZjBhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{"Title":"School of Rock","Year":"2003","imdbID":"tt0332379","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEwOTMzNjYzMl5BMl5BanBnXkFtZTcwNjczMTQyMQ@@._V1_SX300.jpg"},{"Title":"Rock of Ages","Year":"2012","imdbID":"tt1336608","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg2NDQyODAzNF5BMl5BanBnXkFtZTcwMTg5MDA3Nw@@._V1_SX300.jpg"},{"Title":"Rock Star","Year":"2001","imdbID":"tt0202470","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzAxNzNmMzMtYTU4Ni00Y2IxLTk4MGEtZGExNmFiMzBjN2MyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Detroit Rock City","Year":"1999","imdbID":"tt0165710","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmU5ZTJmOWQtNTMwMi00NmIzLTk0ZTAtMjNkMTE4YTA0Yzg4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Picnic at Hanging Rock","Year":"1975","imdbID":"tt0073540","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzg2NjRiYTEtYjdlMS00ZDU4LWI0YWItMGFkZjM2ZmI2OWU1XkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SX300.jpg"},{"Title":"Camp Rock","Year":"2008","imdbID":"tt1055366","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGMwMDdjYWEtZTk2NC00YmUyLTgxMmYtZDEwNTE2NDljNThlXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"},{"Title":"The Flintstones in Viva Rock Vegas","Year":"2000","imdbID":"tt0158622","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTUzYzQzMGQtNTYyNS00NmUzLThmZmUtMmIyNjQzNDU4YWYwXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"},{"Title":"Rock On!!","Year":"2008","imdbID":"tt1230165","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM2NjIwODc4N15BMl5BanBnXkFtZTcwMDgwMzM4MQ@@._V1_SX300.jpg"},{"Title":"Red Rock West","Year":"1993","imdbID":"tt0105226","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzhiMTQxYzMtOWI4NS00NWJiLWE5MDMtMmIzNjMxODNjZjBlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"}];
  }
}
