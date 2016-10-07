import { AutoFPPage } from './app.po';

describe('auto-fp App', function() {
  let page: AutoFPPage;

  beforeEach(() => {
    page = new AutoFPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
