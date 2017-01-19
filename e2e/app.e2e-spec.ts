import { Angular2FormBuilderPage } from './app.po';

describe('angular2-form-builder App', function() {
  let page: Angular2FormBuilderPage;

  beforeEach(() => {
    page = new Angular2FormBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
