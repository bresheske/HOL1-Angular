import { JokePage } from './app.po';

describe('joke App', () => {
  let page: JokePage;

  beforeEach(() => {
    page = new JokePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
