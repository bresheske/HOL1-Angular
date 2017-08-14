import {Vote} from './vote';

describe('Vote', () => {
  it('should create an instance', () => {
    expect(new Vote(0)).toBeTruthy();
  });
  it('should be 10', () => {
    expect(new Vote(10).voteCount).toBe(10);
  });
  it('should increment value', () => {
    let v = new Vote(10);
    v.increment();
    expect(v.voteCount).toBe(11);
  })
});
