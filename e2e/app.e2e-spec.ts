import { AaronsInventoryAppPage } from './app.po';

describe('aarons-inventory-app App', () => {
  let page: AaronsInventoryAppPage;

  beforeEach(() => {
    page = new AaronsInventoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
