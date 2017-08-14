import { Injectable } from '@angular/core';
import { Joke } from "./joke";
import { Vote } from "./vote";

@Injectable()
export class JokeService {

  constructor() { }

  private database:Array<Joke> = [
    new Joke(
      'What do you call a guy with no arms, no legs, and sits in front of a door?', 
      'Matt.', 
      new Vote(0), 
      new Vote(9000),
      1),
    new Joke("Why did the political chicken cross the road?",
      "He didn't! ALTERNATIVE FACTS!",
      new Vote(0),
      new Vote(0),
      2),
    new Joke("Why did the technical support chicken cross the road?",
      "Because he heard that it worked on the computer over there.",
      new Vote(0),
      new Vote(2),
      3),
    new Joke("Why did the speaker chicken cross the road?",
      "I'm sorry, we don't really have time to take that question now, but if you'd like I can send you a consulting rate card...",
      new Vote(1),
      new Vote(27),
      4)
  ];

  getJokes() {
    return this.database;
  }

  getJoke(id:number) {
    return this.database
      .filter(x => x.id == id)
      [0];
  }

}
