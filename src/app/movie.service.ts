import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(private http: Http) {}

  getMovie(): Observable<any> {
    return this.http.get(
      'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json'
    ).pipe(map(response: Response));
  }
}
