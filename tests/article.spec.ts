import { test } from '../playwright-test-options';
import { HeaderPage } from '../pageObjects/headerPage';
import { SearchPage } from '../pageObjects/searchPage';
import { MainPage } from '../pageObjects/mainPage'
import { ArticlePage } from '../pageObjects/articlePage';

test.describe.parallel('Article', () => {
  var headerPage: HeaderPage;
  var searchPage: SearchPage;
  var mainPage: MainPage;
  var articlePage: ArticlePage;

  test.beforeEach(async ({ page }) => {
    headerPage = new HeaderPage(page);
    searchPage = new SearchPage(page);
    mainPage = new MainPage(page);
    articlePage = new ArticlePage(page);

    await page.goto('');
    await headerPage.acceptCookies();
  });

  /*
  Bug found?:
  Search input allows 50 characters but search for 50 character title does not seem to work
  vb keyword: "Geen avondje Netflix, maar zelf achter échte criminelen aan: Els (30) helpt de recherche"
  */
  test('should find article by searching for title', async () => {
    await headerPage.searchKeyword("Geen avondje Netflix, maar zelf achter échte c");
    await searchPage.verifySearchResult("Geen avondje Netflix, maar zelf achter échte c")
  });

  test('should navigate to article by clicking tile', async () => {
    const articleTitle = await mainPage.navigateToFirstTile();
    await articlePage.verifyArticleTitle(articleTitle);
  });
});