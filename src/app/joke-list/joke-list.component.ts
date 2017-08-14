import { Component, OnInit, Input } from '@angular/core';
import { Joke } from "../joke";
import { ActivatedRoute, Router } from "@angular/router";
import { JokeService } from "../joke.service";

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  @Input() jokes:Array<Joke>;
  public search:string = '';

  constructor(
    public router: Router, 
    public service:JokeService) {
    
  }

  ngOnInit() {
    this.jokes = this.service.getJokes();
  }

  showJoke(id:number) {
    this.router.navigateByUrl(`/jokes/${id}`);
  }

}
