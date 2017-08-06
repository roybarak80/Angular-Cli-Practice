import { AngularNGprimePage } from './app.po';

describe('angular-ngprime App', () => {
  let page: AngularNGprimePage;

  beforeEach(() => {
    page = new AngularNGprimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
