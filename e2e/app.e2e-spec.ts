import { CrashTimesPage } from './app.po';

describe('crash-times App', () => {
  let page: CrashTimesPage;

  beforeEach(() => {
    page = new CrashTimesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
