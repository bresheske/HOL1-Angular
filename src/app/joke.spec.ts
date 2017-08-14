import {Joke} from './joke';

describe('Joke', () => {
  it('should create an instance', () => {
    expect(new Joke('Knock Knock', 'Whos there', 0, 1)).toBeTruthy();
  });

  it('should increment lols', () => {
    let j = new Joke('asdf', 'asdf', 0, 0);
    j.incrementLol();
    expect(j.lols).toBe(1);
  });
  
  it('should increment groans', () => {
    let j = new Joke('asdf', 'asdf', 0, 0);
    j.incrementGroans();
    expect(j.groans).toBe(1);
  });
});
