import { AncestryWebPage } from './app.po';

describe('ancestry-web App', () => {
  let page: AncestryWebPage;

  beforeEach(() => {
    page = new AncestryWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
