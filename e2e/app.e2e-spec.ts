import { DealsAppPage } from './app.po';

describe('deals-app App', function() {
  let page: DealsAppPage;

  beforeEach(() => {
    page = new DealsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
