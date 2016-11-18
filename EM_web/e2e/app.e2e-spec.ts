import { OryxEMPage } from './app.po';

describe('oryx-em App', function() {
  let page: OryxEMPage;

  beforeEach(() => {
    page = new OryxEMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
