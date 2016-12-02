import { ShareTemplateContentPage } from './app.po';

describe('share-template-content App', function() {
  let page: ShareTemplateContentPage;

  beforeEach(() => {
    page = new ShareTemplateContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
