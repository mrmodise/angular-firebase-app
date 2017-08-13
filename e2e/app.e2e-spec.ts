import { AngularFirebaseAppPage } from './app.po';

describe('angular-firebase-app App', () => {
  let page: AngularFirebaseAppPage;

  beforeEach(() => {
    page = new AngularFirebaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
