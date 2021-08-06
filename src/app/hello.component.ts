import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
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
  profile: any;
  constructor(private http: Http) {}
  getMovie() {
    this.profile = this.http
      .get('http://www.omdbapi.com/?i=tt3896198&apikey=5b8ebe9f')
      .subcribe((response: any) => response);
    return this.profile;
  }
}
