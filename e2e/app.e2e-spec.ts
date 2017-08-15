import { OfficeOnlinePage } from './app.po';

describe('office-online App', () => {
  let page: OfficeOnlinePage;

  beforeEach(() => {
    page = new OfficeOnlinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
