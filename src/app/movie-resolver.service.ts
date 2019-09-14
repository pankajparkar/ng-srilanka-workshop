import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService {
  movie$;
  constructor(private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any>|Promise<any>|any {
    const id = route.params.id;
    const movie$ = this.http.get('http://www.omdbapi.com/?apikey=7dcc7fb6&i='+id).pipe(delay(5000))
    return movie$;
  }
}
