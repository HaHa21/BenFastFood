import { FoodAppPage } from './app.po';

describe('food-app App', () => {
  let page: FoodAppPage;

  beforeEach(() => {
    page = new FoodAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
