import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Vote } from "../vote";

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() public vote:Vote = new Vote(0);
  @Output() public onIncrement: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    
  }

  clicked() {
    console.log(`Upvote: Clicked. Incrementing vote count. Current: ${this.vote.voteCount}`);
    this.vote.increment();
    this.onIncrement.emit(this.vote.voteCount);
  }

}
