import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ],
  providers: [MovieService]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  profile: any;
  constructor(private moviedetails: MovieService) {}
  ngOnInit() {
    this.moviedetails
      .getMovie()
      .subscribe(movieData => (this.profile = movieData));
    console.log(this.profile);
  }
}
