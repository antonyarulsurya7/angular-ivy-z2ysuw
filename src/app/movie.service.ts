import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  getMovie(): Observable<any> {
    return this.http
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=5b8ebe9f')
      .pipe(map((response: Response) => response.json));
  }
}
