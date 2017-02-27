import { CHUCKNORRISPage } from './app.po';

describe('chucknorris App', function() {
  let page: CHUCKNORRISPage;

  beforeEach(() => {
    page = new CHUCKNORRISPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
