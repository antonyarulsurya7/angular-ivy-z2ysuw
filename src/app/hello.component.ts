import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  constructor(private http: Http) {}
  getMovie(): Observable<any> {
    return this.http
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=5b8ebe9f')
      .map((response: any) => response.json);
  }
}
