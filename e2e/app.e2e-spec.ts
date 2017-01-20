import { PdfPrintingPage } from './app.po';

describe('pdf-printing App', function() {
  let page: PdfPrintingPage;

  beforeEach(() => {
    page = new PdfPrintingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
