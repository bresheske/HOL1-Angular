import { Component, OnInit, Input } from '@angular/core';
import { Joke } from "../joke";
import { ActivatedRoute } from "@angular/router";
import { JokeService } from "../joke.service";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() public model:Joke;
  private id:number;

  constructor(
    route: ActivatedRoute,
    public service: JokeService
  ) {
    route.params.subscribe(params => {
      this.id = (params.jokeid as number);
      this.model = this.service.getJoke(this.id);
    })
  }

  ngOnInit() {
  }

  lolsUpvoted(lols:number) {
    console.log(`Joke: lols Upvoted. Lols: ${lols}`);
  }

  groansUpvoted(groans:number) {
    console.log(`Joke: groans Upvoted. Lols: ${groans}`);
  }
}
