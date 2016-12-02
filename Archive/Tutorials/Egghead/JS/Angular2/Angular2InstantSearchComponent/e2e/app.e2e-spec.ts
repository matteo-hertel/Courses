import { Angular2InstantSearchComponentPage } from './app.po';

describe('angular2-instant-search-component App', function() {
  let page: Angular2InstantSearchComponentPage;

  beforeEach(() => {
    page = new Angular2InstantSearchComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
